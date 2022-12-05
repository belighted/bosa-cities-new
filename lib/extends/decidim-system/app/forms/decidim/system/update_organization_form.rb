# frozen_string_literal: true

require "active_support/concern"

module UpdateOrganizationFormExtend
  extend ActiveSupport::Concern

  included do
    attribute :password, String # SMTP settings

    attribute :basic_auth_username, String
    attribute :basic_auth_password, String

    USERS_AUTO_DELETION_UNITS = %w(days weeks months years).freeze
    jsonb_attribute :users_auto_deletion_settings, [
      [:enabled, Decidim::AttributeObject::TypeMap::Boolean],
      [:mark_for_deletion_after, Integer],
      [:mark_for_deletion_after_unit, String],
      [:delete_marked_after, Integer],
      [:delete_marked_after_unit, String],
      [:delete_admin_users, Decidim::AttributeObject::TypeMap::Boolean],
      [:send_email_on_mark_for_deletion, Decidim::AttributeObject::TypeMap::Boolean],
      [:send_email_on_deletion, Decidim::AttributeObject::TypeMap::Boolean]
    ]
  end
end

Decidim::System::UpdateOrganizationForm.include UpdateOrganizationFormExtend
