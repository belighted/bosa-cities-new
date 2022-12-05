# frozen_string_literal: true

module Decidim
  class UsersAutoDeletionJob < ApplicationJob
    queue_as :default

    include FormFactory

    attr_reader :settings

    def perform(organization)
      @organization = organization
      @settings = (organization.users_auto_deletion_settings || {}).with_indifferent_access

      return unless @settings[:enabled]

      delete_marked_users
      mark_users_for_deletion
    end

    private

    def mark_users_for_deletion
      mark_users_scope.find_in_batches(batch_size: 100) do |users|
        users.each do |user|
          # rubocop:disable Rails/SkipsModelValidations
          user.update_column(:marked_for_auto_deletion_at, Time.zone.today)
          # rubocop:enable Rails/SkipsModelValidations

          next unless @settings[:send_email_on_mark_for_deletion]

          Decidim::NotificationMailer.event_received(
            "decidim.events.users.user_marked_for_auto_deletion", # event
            Decidim::Users::UserMarkedForAutoDeletionEvent.name, # event_class_name
            user, # resource
            user, # user
            "affected_user", # user_role
            {
              date: I18n.l(Time.zone.today + delete_marked_after, format: :default),
              sign_in_url: Decidim::Core::Engine.routes.url_helpers.user_session_url(host: @organization.host)
            } # extra
          ).deliver_later
        end
      end
    end

    def delete_marked_users
      @organization.users.not_deleted.where("marked_for_auto_deletion_at <= ?", Time.zone.today - delete_marked_after).find_in_batches(batch_size: 100).each do |users|
        users.each do |user|
          next if cleared_mark_for_deletion?(user)

          f = form(Decidim::DeleteAccountForm).from_params({ delete_reason: "Automatically deleted due to inactivity" })
          Decidim::DestroyAccount.call(user, f) do
            on(:ok) do
              next unless settings[:send_email_on_deletion]

              Decidim::NotificationMailer.event_received(
                "decidim.events.users.user_auto_deleted", # event
                Decidim::Users::UserAutoDeletedEvent.name, # event_class_name
                user, # resource
                user, # user
                "affected_user", # user_role
                {} # extra
              ).deliver_later
            end
          end
        end
      end
    end

    def cleared_mark_for_deletion?(user)
      if (user.admin? && !delete_admin_users?) ||
         (user.last_sign_in_at && user.last_sign_in_at >= user.marked_for_auto_deletion_at) ||
         (user.last_sign_in_at && user.last_sign_in_at >= Time.zone.today - mark_for_deletion_after)
        # rubocop:disable Rails/SkipsModelValidations
        user.update_column(:marked_for_auto_deletion_at, nil)
        # rubocop:enable Rails/SkipsModelValidations
      end
    end

    def mark_users_scope
      scope = @organization.users.not_deleted
      scope = delete_admin_users? ? scope : scope.where(admin: false)
      scope = scope.where("last_sign_in_at::date < ?", Time.zone.today - mark_for_deletion_after)
      scope.where(marked_for_auto_deletion_at: nil)
    end

    def delete_admin_users?
      @settings[:delete_admin_users]
    end

    def mark_for_deletion_after
      @settings[:mark_for_deletion_after].to_i.send(@settings[:mark_for_deletion_after_unit])
    end

    def delete_marked_after
      @settings[:delete_marked_after].to_i.send(@settings[:delete_marked_after_unit])
    end
  end
end
