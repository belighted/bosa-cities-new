# frozen_string_literal: true

class CalculateAllMetricsJob < ApplicationJob
  def perform
    BosaCitiesNew::Application.load_tasks if Rake::Task.tasks.empty?
    Rake::Task["decidim:metrics:all"].reenable
    Rake::Task["decidim:metrics:all"].invoke
  end
end
