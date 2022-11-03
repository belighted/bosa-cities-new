if ENV['LOGTAIL_SKIP_LOGS'].blank? && !ENV['LOGTAILS_SOURCE_TOKEN'].blank? && Rails.env.production?
  http_device = Logtail::LogDevices::HTTP.new(ENV['LOGTAILS_SOURCE_TOKEN'])
  Rails.logger = Logtail::Logger.new(http_device)
else
  Rails.logger = Logtail::Logger.new(STDOUT)
end
