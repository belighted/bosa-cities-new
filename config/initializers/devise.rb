# frozen_string_literal: true

Devise.setup do |config|
  # Number of authentication tries before locking an account if lock_strategy
  # is failed attempts.
  config.maximum_attempts = 5
end
