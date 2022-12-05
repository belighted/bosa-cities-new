# frozen_string_literal: true

require "spec_helper"

describe "Executing Decidim Users Auto Deletion tasks" do
  describe "rake decidim:users_auto_deletion", type: :task do
    let!(:organizations) { create_list(:organization, 2) }

    after { clear_enqueued_jobs }

    context "when executing task" do
      it "have to be executed without failures" do
        Rake::Task[:"decidim:users_auto_deletion"].reenable
        expect { Rake::Task[:"decidim:users_auto_deletion"].invoke }.not_to raise_error
      end

      it "creates jobs for each organization" do
        Rake::Task[:"decidim:users_auto_deletion"].reenable
        expect { Rake::Task[:"decidim:users_auto_deletion"].invoke }.to have_enqueued_job(Decidim::UsersAutoDeletionJob).exactly(Decidim::Organization.count).times
      end
    end
  end
end
