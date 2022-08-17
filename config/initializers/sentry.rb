
Sentry.init do |config|
  config.logger = Sentry::Logger.new(STDOUT)
  config.dsn = ENV["SENTRY_DSN"]
  config.enabled_environments = %w[bosa-cities-new-production bosa-cities-new-uat]
  config.environment = ENV.fetch("SENTRY_CURRENT_ENV", "missing-env")
  config.send_default_pii = true
end
