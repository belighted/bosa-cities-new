# frozen_string_literal: true

class AddAutoDeleteOnDateToDecidimUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :decidim_users, :marked_for_auto_deletion_at, :date
  end
end
