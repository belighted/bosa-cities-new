module BasicAuthConcern
  extend ActiveSupport::Concern

  included do
    before_action :check_basic_auth
  end

  def check_basic_auth
    return true if !Rails.application.config.basic_auth_required

    authenticate_or_request_with_http_basic do |username, password|
      username == Rails.application.config.basic_auth_username &&
        password == Rails.application.config.basic_auth_password
    end

  end

end