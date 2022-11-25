# frozen_string_literal: true

require "decidim/dev"

# Loads basic rspec setup from decidim gem
class DecidimSpecLoader
  def self.init
    ENV["ENGINE_ROOT"] = File.dirname(__dir__)
    @root_path = File.expand_path(File.join("."))
    Decidim::Dev.dummy_app_path = @root_path
    @gem_path = Gem.loaded_specs["decidim"].full_gem_path

    require "#{@gem_path}/decidim-dev/lib/decidim/dev/test/base_spec_helper.rb"

    # Load factories
    require "decidim/core/test/factories"
    # require "decidim/participatory_processes/test/factories"
    # require "decidim/proposals/test/factories"
    # require "decidim/meetings/test/factories"
    # require "decidim/accountability/test/factories"
    require "decidim/system/test/factories"
    # require "decidim/blogs/test/factories"
  end

  def self.run(file_path)
    require "#{@gem_path}/#{file_path}"
  end

  def self.require_shared_examples(engine)
    Dir["#{@gem_path}/decidim-#{engine}/spec/shared/**/*.rb"].each do |file_path|
      puts "Loading shared example: #{file_path}"
      require file_path
    end
  end
end
