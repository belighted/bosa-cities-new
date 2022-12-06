# frozen_string_literal: true

require "spec_helper"

# Original test should pass normally
DecidimSpecLoader.run("decidim-system/spec/forms/decidim/system/update_organization_form_spec.rb")

module Decidim::System
  describe UpdateOrganizationForm do
    subject do
      described_class.new(
        name: Faker::Company.name,
        host: Faker::Internet.domain_name,
        users_registration_mode: "enabled",
        **users_auto_deletion_settings
      )
    end

    let(:users_auto_deletion_settings) do
      {
        "enabled" => true,
        "mark_for_deletion_after" => 11,
        "mark_for_deletion_after_unit" => "months",
        "delete_marked_after" => 30,
        "delete_marked_after_unit" => "days",
        "delete_admin_users" => true,
        "send_email_on_mark_for_deletion" => true,
        "send_email_on_deletion" => true
      }
    end

    context "when everything is OK" do
      it { is_expected.to be_valid }

      describe "users_auto_deletion_settings" do
        it "contains attributes as json" do
          expect(subject.users_auto_deletion_settings).to eq(users_auto_deletion_settings)
        end
      end
    end
  end
end
