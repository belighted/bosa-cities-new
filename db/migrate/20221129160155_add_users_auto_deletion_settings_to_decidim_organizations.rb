# frozen_string_literal: true

class AddUsersAutoDeletionSettingsToDecidimOrganizations < ActiveRecord::Migration[6.1]
  def change
    add_column :decidim_organizations, :users_auto_deletion_settings, :jsonb
  end
end
