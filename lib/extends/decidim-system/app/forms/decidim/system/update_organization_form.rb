# frozen_string_literal: true

require "active_support/concern"

module UpdateOrganizationFormExtend
  extend ActiveSupport::Concern

  included do
    attribute :password, String # SMTP settings

    attribute :basic_auth_username, String
    attribute :basic_auth_password, String
  end
end

Decidim::System::UpdateOrganizationForm.include UpdateOrganizationFormExtend
