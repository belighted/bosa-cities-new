# frozen_string_literal: true

Sentry.init do |config|
  config.logger = Sentry::Logger.new($stdout)
  config.dsn = ENV.fetch("SENTRY_DSN", nil)
  config.enabled_environments = %w(bosa-cities-new bosa-cities-new-uat)
  config.environment = ENV.fetch("SENTRY_CURRENT_ENV", "missing-env")
  config.send_default_pii = true
end
