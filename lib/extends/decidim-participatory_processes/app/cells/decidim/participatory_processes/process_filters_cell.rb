# frozen_string_literal: true

require "active_support/concern"

module ParticipatoryProcessesProcessFiltersCellExtend
  extend ActiveSupport::Concern

  included do
    def filtered_processes(date_filter, filter_with_type: true)
      query = Decidim::ParticipatoryProcess.ransack(
        {
          with_date: date_filter,
          with_scope: get_filter(:with_scope),
          with_area: get_filter(:with_area),
          with_type: filter_with_type ? get_filter(:with_type) : nil,
          decidim_organization_id_eq: current_organization.id
        }
      ).result

      query.published.visible_for(current_user)
    end
  end
end

Decidim::ParticipatoryProcesses::ProcessFiltersCell.include ParticipatoryProcessesProcessFiltersCellExtend
