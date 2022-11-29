# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION
DECIDIM_GIT = "https://github.com/decidim/decidim"
DECIDIM_BRANCH = "release/0.27-stable"
DECIDIM_VERSION = "0.27.0"

gem "decidim", git: DECIDIM_GIT, branch: DECIDIM_BRANCH

# gem "decidim-conferences", git: DECIDIM_GIT, branch: DECIDIM_BRANCH
# gem "decidim-consultations", git: DECIDIM_GIT, branch: DECIDIM_BRANCH
# gem "decidim-elections", git: DECIDIM_GIT, branch: DECIDIM_BRANCH
# gem "decidim-initiatives", git: DECIDIM_GIT, branch: DECIDIM_BRANCH
# gem "decidim-templates", git: DECIDIM_GIT, branch: DECIDIM_BRANCH

gem "decidim-term_customizer", git: "https://github.com/mainio/decidim-module-term_customizer", branch: "develop"

gem "bootsnap", "~> 1.3"

gem "puma", ">= 5.0.0"

gem "faker", "~> 2.14"

gem "wicked_pdf", "~> 2.1"

## Infra
gem "dotenv-rails"

## Sidekiq
gem "sidekiq"
gem "sidekiq-scheduler"

## Debugging and Monitoring
gem "appsignal"
gem "pry-rails"
gem "sentry-rails"
gem "sentry-ruby"
gem "sentry-sidekiq"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "decidim-dev", git: DECIDIM_GIT, branch: DECIDIM_BRANCH

  gem "brakeman", "~> 5.2"
  gem "net-imap", "~> 0.2.3"
  gem "net-pop", "~> 0.1.1"
  gem "net-smtp", "~> 0.3.1"
  gem "parallel_tests", "~> 3.7"
end

group :development do
  gem "letter_opener_web", "~> 2.0"
  gem "listen", "~> 3.1"
  gem "rubocop-faker"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 4.2"
end

group :production do
  gem "aws-sdk-s3", require: false
end
