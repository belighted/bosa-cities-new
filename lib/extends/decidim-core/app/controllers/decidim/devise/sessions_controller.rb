# frozen_string_literal: true

require 'active_support/concern'

module DeviseSessionsControllerExtend
  extend ActiveSupport::Concern

  included do

    def first_login_and_not_authorized?(user)
      user.is_a?(Decidim::User) && user.sign_in_count == 1 && organization_available_authorizations.any? && user.verifiable?
    end

    private

    def organization_available_authorizations
      current_organization.available_authorizations.reject { |handler| handler.to_sym == :participant_impersonation_handler }
    end

  end
end

Decidim::Devise::SessionsController.include DeviseSessionsControllerExtend
