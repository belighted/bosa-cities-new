# frozen_string_literal: true

class PreloadOpenDataJob < ApplicationJob
  def perform
    BosaCitiesNew::Application.load_tasks if Rake::Task.tasks.empty?
    Rake::Task["decidim:open_data:export"].reenable
    Rake::Task["decidim:open_data:export"].invoke
  end
end
