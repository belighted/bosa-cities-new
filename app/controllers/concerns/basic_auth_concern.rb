module BasicAuthConcern
  extend ActiveSupport::Concern

  included do
    before_action :check_basic_auth
  end

  def check_basic_auth
    return true if !Rails.application.config.basic_auth_required && !current_organization_basic_auth_enabled?

    authenticate_or_request_with_http_basic do |username, password|
      if current_organization_basic_auth_enabled?
        username == current_organization.basic_auth_username &&
          password == current_organization.basic_auth_password
      else
        username == Rails.application.config.basic_auth_username &&
          password == Rails.application.config.basic_auth_password
      end
    end
  end

  private

  def current_organization_basic_auth_enabled?
    current_organization&.basic_auth_username.present? || current_organization&.basic_auth_password.present?
  end

end