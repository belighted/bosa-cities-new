# frozen_string_literal: true

class DeleteInactiveUsersJob < ApplicationJob
  def perform
    BosaCitiesNew::Application.load_tasks if Rake::Task.tasks.empty?
    Rake::Task["decidim:users_auto_deletion"].reenable
    Rake::Task["decidim:users_auto_deletion"].invoke
  end
end
