# frozen_string_literal: true

require "active_support/concern"

module VerificationsAuthorizationsControllerExtend
  extend ActiveSupport::Concern

  included do
    protected

    def unauthorized_methods
      @unauthorized_methods ||= available_verification_workflows.reject do |handler|
        active_authorization_methods.include?(handler.key) || handler.key.to_sym == :participant_impersonation_handler
      end
    end
  end
end

Decidim::Verifications::AuthorizationsController.include VerificationsAuthorizationsControllerExtend
