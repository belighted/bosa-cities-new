require_relative "boot"

require "decidim/rails"

# Add the frameworks used by your app that are not loaded by Decidim.
# require "action_mailbox/engine"
# require "action_text/engine"
require "action_cable/engine"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BosaCitiesNew
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Basic auth
    config.basic_auth_required = ENV.fetch('BASIC_AUTH_REQUIRED', 1).to_i == 1
    config.basic_auth_username = ENV['BASIC_AUTH_USERNAME']
    config.basic_auth_password = ENV['BASIC_AUTH_PASSWORD']

    config.to_prepare do
      list = Dir.glob("#{Rails.root}/lib/extends/**/*.rb")
      concerns = list.select { |o| o.include?('concerns/') }
      if concerns.any?
        concerns.each { |c| puts "Concern: #{c}" }
        raise Exception, %(
        It looks like you're going to add an extension of a decidim concern.
        Putting it into lib/extends/ will lead to issues.
        Please override any of decidim concerns through classic monkey-patching and put them in the app/ folder.
      )
      end
      list.each { |override| require_dependency override }
    end
  end
end
