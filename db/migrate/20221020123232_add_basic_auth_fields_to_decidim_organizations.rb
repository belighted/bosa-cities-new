# frozen_string_literal: true

class AddBasicAuthFieldsToDecidimOrganizations < ActiveRecord::Migration[5.2]
  def change
    add_column :decidim_organizations, :basic_auth_username, :string
    add_column :decidim_organizations, :basic_auth_password, :string
  end
end
