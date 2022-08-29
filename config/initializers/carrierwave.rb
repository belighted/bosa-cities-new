# frozen_string_literal: true

# Default CarrierWave setup.

cw_creds = Rails.application.secrets.dig(:carrierwave)
if cw_creds.dig(:enabled) && (Rails.env.production? || Rails.env.staging?)
  CarrierWave.configure do |config|
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      provider: cw_creds.dig(:provider),
      aws_access_key_id: cw_creds.dig(:aws_access_key_id),
      aws_secret_access_key: cw_creds.dig(:aws_secret_access_key),
      region: cw_creds.dig(:region),
      host: cw_creds.dig(:host),
      endpoint: cw_creds.dig(:endpoint),
      path_style: cw_creds.dig(:path_style),
    }
    config.fog_directory = cw_creds.dig(:fog_directory)
    config.storage = :fog
    config.asset_host = cw_creds.dig(:asset_host) if cw_creds.dig(:asset_host).present?
  end
else
  CarrierWave.configure do |config|
    config.permissions = 0o666
    config.directory_permissions = 0o777
    config.storage = :file
    config.enable_processing = !Rails.env.test?
  end
end
