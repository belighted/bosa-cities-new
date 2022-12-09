# frozen_string_literal: true

require "spec_helper"

describe Decidim::UsersAutoDeletionJob do
  subject { described_class }

  include Decidim::FormFactory

  let(:organization) { create(:organization, users_auto_deletion_settings: users_auto_deletion_settings) }
  let(:users_auto_deletion_settings) do
    {
      enabled: enabled,
      mark_for_deletion_after: mark_for_deletion_after,
      mark_for_deletion_after_unit: mark_for_deletion_after_unit,
      delete_marked_after: delete_marked_after,
      delete_marked_after_unit: delete_marked_after_unit,
      delete_admin_users: delete_admin_users,
      send_email_on_mark_for_deletion: send_email_on_mark_for_deletion,
      send_email_on_deletion: send_email_on_deletion
    }
  end
  let(:enabled) { true }
  let(:mark_for_deletion_after) { 11 }
  let(:mark_for_deletion_after_unit) { "months" }
  let(:delete_marked_after) { 1 }
  let(:delete_marked_after_unit) { "months" }
  let(:delete_admin_users) { true }
  let(:send_email_on_mark_for_deletion) { true }
  let(:send_email_on_deletion) { true }

  describe "queue" do
    it "is queued to events" do
      expect(subject.queue_name).to eq "default"
    end
  end

  describe "perform" do
    before do
      allow(Decidim::NotificationMailer).to receive(:event_received).and_return(mailer)
    end

    let(:mailer) { double(deliver_later: true, deliver_now: true) }
    let(:mark_date) { Time.zone.today - mark_for_deletion_after.send(mark_for_deletion_after_unit) }
    let(:delete_date) { Time.zone.today - mark_date - delete_marked_after.send(delete_marked_after_unit) }
    let!(:active_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date) }

    context "when auto deletion is disabled" do
      let(:enabled) { false }
      let!(:inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date - 1.day) }

      it "doesn't do anything" do
        expect(Decidim::NotificationMailer).not_to receive(:event_received)
        expect(Decidim::DestroyAccount).not_to receive(:call)
        subject.perform_now(organization)
      end
    end

    context "when mark users for deletion" do
      let!(:inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date - 1.day) }

      it "marks inactive user" do
        allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(inactive_user)).and_return(mailer)
        subject.perform_now(organization)
        expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).time
        expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
      end

      it "doesn't mark active user for deletion" do
        subject.perform_now(organization)
        expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
        expect(active_user.reload.marked_for_auto_deletion_at).to be_nil
      end

      context "when there is another inactive user" do
        context "and it is not marked for deletion" do
          let!(:another_inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date - 1.day) }

          it "marks both users" do
            allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(inactive_user)).and_return(mailer)
            allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(another_inactive_user)).and_return(mailer)
            subject.perform_now(organization)
            expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(2).times
            expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
            expect(another_inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
          end
        end

        context "and it is already marked for deletion" do
          let!(:inactive_marked_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date - 1.day, marked_for_auto_deletion_at: Time.zone.today) }

          it "marks only not marked user" do
            allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(inactive_user)).and_return(mailer)
            subject.perform_now(organization)
            expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).time
            expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
          end
        end
      end

      context "when configured not to send email on mark for deletion" do
        let(:send_email_on_mark_for_deletion) { false }

        it "marks inactive user and doesn't send an email" do
          expect(Decidim::NotificationMailer).not_to receive(:event_received)
          subject.perform_now(organization)
          expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
        end
      end

      context "when inactive user is admin" do
        let!(:inactive_user) { create(:user, :confirmed, :admin, organization: organization, last_sign_in_at: mark_date - 1.day) }

        it "marks inactive admin user" do
          allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(inactive_user)).and_return(mailer)
          subject.perform_now(organization)
          expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).time
          expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
        end

        context "and configured not to delete admin users" do
          let(:delete_admin_users) { false }

          it "doesn't mark user for deletion" do
            expect(Decidim::NotificationMailer).not_to receive(:event_received)
            subject.perform_now(organization)
            expect(inactive_user.reload.marked_for_auto_deletion_at).to be_nil
          end
        end
      end

      context "and there is another organization" do
        let!(:another_organization) { create(:organization) }
        let!(:another_inactive_user) { create(:user, :confirmed, organization: another_organization, last_sign_in_at: mark_date - 1.day) }

        it "marks inactive user of current organization only" do
          allow(Decidim::NotificationMailer).to receive(:event_received).with(*mark_event_mailer_params_for(inactive_user)).and_return(mailer)
          subject.perform_now(organization)
          expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).time
          expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
        end

        it "doesn't affect user from another organization" do
          subject.perform_now(organization)
          expect(inactive_user.reload.marked_for_auto_deletion_at).not_to be_nil
          expect(another_inactive_user.reload.marked_for_auto_deletion_at).to be_nil
        end
      end
    end

    context "when delete marked users" do
      context "and user remains inactive after it is marked for deletion" do
        let!(:marked_inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }

        it "deletes user" do
          allow(Decidim::NotificationMailer).to receive(:event_received).with(*delete_event_mailer_params_for(marked_inactive_user)).and_return(mailer)
          subject.perform_now(organization)
          expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).times
          expect(marked_inactive_user.reload.deleted?).to be true
          expect(marked_inactive_user.reload.delete_reason).to eq("Automatically deleted due to inactivity")
        end
      end

      context "and user becomes active after it is marked for deletion" do
        let!(:marked_active_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date, marked_for_auto_deletion_at: mark_date) }

        it "doesn't delete user" do
          expect(Decidim::NotificationMailer).not_to receive(:event_received)
          subject.perform_now(organization)
          expect(marked_active_user.reload.deleted?).to be false
          expect(marked_active_user.reload.delete_reason).to be_nil
          expect(marked_active_user.reload.marked_for_auto_deletion_at).to be_nil
        end
      end

      context "when configured not to send email on deletion" do
        let!(:marked_inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }
        let(:send_email_on_deletion) { false }

        it "deletes user and doesn't send an email" do
          expect(Decidim::NotificationMailer).not_to receive(:event_received)
          subject.perform_now(organization)
          expect(marked_inactive_user.reload.deleted?).to be true
          expect(marked_inactive_user.reload.delete_reason).to eq("Automatically deleted due to inactivity")
        end
      end

      context "and user is already deleted" do
        let(:delete_reason) { "Another delete reason." }
        let!(:deleted_user) { create(:user, :confirmed, :deleted, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date, delete_reason: delete_reason) }

        it "ignores deleted user" do
          expect(Decidim::NotificationMailer).not_to receive(:event_received)
          subject.perform_now(organization)
          expect(deleted_user.reload.deleted?).to be true
          expect(deleted_user.reload.delete_reason).to eq(delete_reason)
        end
      end

      context "when marked inactive user is admin" do
        let!(:marked_admin_user) { create(:user, :confirmed, :admin, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }

        it "deletes admin user" do
          allow(Decidim::NotificationMailer).to receive(:event_received).with(*delete_event_mailer_params_for(marked_admin_user)).and_return(mailer)
          subject.perform_now(organization)
          expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).times
          expect(marked_admin_user.reload.deleted?).to be true
          expect(marked_admin_user.reload.delete_reason).to eq("Automatically deleted due to inactivity")
        end

        context "and configured not to delete admin users" do
          let(:delete_admin_users) { false }

          it "doesn't delete admin user" do
            expect(Decidim::NotificationMailer).not_to receive(:event_received)
            subject.perform_now(organization)
            expect(marked_admin_user.reload.deleted?).to be false
            expect(marked_admin_user.reload.delete_reason).to be_nil
            expect(marked_admin_user.reload.marked_for_auto_deletion_at).to be_nil
          end
        end
      end

      context "and there is another organization" do
        let!(:marked_inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }
        let!(:another_organization) { create(:organization) }
        let!(:another_marked_inactive_user) { create(:user, :confirmed, organization: another_organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }

        it "deletes user of current organization only" do
          allow(Decidim::NotificationMailer).to receive(:event_received).with(*delete_event_mailer_params_for(marked_inactive_user)).and_return(mailer)
          subject.perform_now(organization)
          expect(Decidim::NotificationMailer).to have_received(:event_received).exactly(1).times
          expect(marked_inactive_user.reload.deleted?).to be true
          expect(marked_inactive_user.reload.delete_reason).to eq("Automatically deleted due to inactivity")
        end

        it "doesn't affect user from another organization" do
          subject.perform_now(organization)
          expect(marked_inactive_user.reload.deleted?).to be true
          expect(marked_inactive_user.reload.delete_reason).to eq("Automatically deleted due to inactivity")

          expect(another_marked_inactive_user.reload.deleted?).to be false
          expect(another_marked_inactive_user.reload.delete_reason).to be_nil
        end
      end
    end
  end

  describe "#perform should send an email" do
    let(:mark_date) { Time.zone.today - mark_for_deletion_after.send(mark_for_deletion_after_unit) }
    let(:delete_date) { Time.zone.today - mark_date - delete_marked_after.send(delete_marked_after_unit) }

    context "when marks user" do
      let!(:inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: mark_date - 1.day) }

      it "schedule `user_marked_for_auto_deletion` event email" do
        ActiveJob::Base.queue_adapter = :test
        clear_enqueued_jobs
        expect { subject.perform_now(organization) }.to have_enqueued_job(ActionMailer::MailDeliveryJob)
        expect(mailers_enqueued_jobs.count).to eq 1
        expect { perform_enqueued_jobs }.to change(emails, :count).by(1)

        expect(last_email.to).to include(inactive_user.email)
        expect(last_email.subject).to include("Your account will be deleted on #{deletion_date_formatted}.")
        expect(last_email.body.encoded).to include("Your account will be deleted on #{deletion_date_formatted}.")
        expect(last_email.body.encoded).to include("Please log in again to prevent automatic deletion of your account")
        expect(last_email.body.encoded).to include("<a href=\"#{Decidim::Core::Engine.routes.url_helpers.user_session_url(host: organization.host)}\"")
      end
    end

    context "when deletes user" do
      let!(:marked_inactive_user) { create(:user, :confirmed, organization: organization, last_sign_in_at: delete_date - 1.day, marked_for_auto_deletion_at: mark_date) }

      it "schedules `user_auto_deleted` event email" do
        expect { subject.perform_now(organization) }.to change(emails, :count).by(1)
        expect(last_email.to).to include(marked_inactive_user.email)
        expect(last_email.subject).to include("Your account has been deleted.")
        expect(last_email.body.encoded).to include("Your account has been deleted.")
      end
    end
  end

  def mark_event_mailer_params_for(user)
    [
      "decidim.events.users.user_marked_for_auto_deletion",
      Decidim::Users::UserMarkedForAutoDeletionEvent.name,
      user,
      user,
      "affected_user",
      {
        date: deletion_date_formatted,
        sign_in_url: Decidim::Core::Engine.routes.url_helpers.user_session_url(host: organization.host)
      }
    ]
  end

  def delete_event_mailer_params_for(user)
    [
      "decidim.events.users.user_auto_deleted",
      Decidim::Users::UserAutoDeletedEvent.name,
      user,
      user,
      "affected_user",
      {}
    ]
  end

  def deletion_date_formatted
    I18n.l(Time.zone.today + delete_marked_after.send(delete_marked_after_unit), format: :default)
  end

  def mailers_enqueued_jobs
    enqueued_jobs.select { |j| j[:queue] == "mailers" }
  end
end
