# frozen_string_literal: true

namespace :decidim do
  desc "Generates tasks for each organization."
  task users_auto_deletion: :environment do
    Decidim::Organization.find_each do |organization|
      Decidim::UsersAutoDeletionJob.perform_later(organization)
    end
  end
end
