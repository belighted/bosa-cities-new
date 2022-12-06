# frozen_string_literal: true

require "spec_helper"

# Original test should pass normally
DecidimSpecLoader.run("decidim-system/spec/commands/decidim/system/update_organization_spec.rb")

module Decidim
  module System
    describe UpdateOrganization do
      describe "call" do
        let(:form) do
          UpdateOrganizationForm.new(params)
        end
        let(:organization) { create :organization, name: ::Faker::Company.name }
        let(:command) { described_class.new(organization.id, form) }

        context "when the form is valid" do
          let(:upload_settings) do
            Decidim::OrganizationSettings.default(:upload)
          end

          context "and has basic auth params" do
            let(:basic_auth_username) { "username" }
            let(:basic_auth_password) { "password" }
            let(:params) do
              {
                name: ::Faker::Company.name,
                host: ::Faker::Internet.domain_name,
                users_registration_mode: "existing",
                file_upload_settings: params_for_uploads(upload_settings),
                basic_auth_username: basic_auth_username,
                basic_auth_password: basic_auth_password
              }
            end

            it "returns a valid response" do
              expect { command.call }.to broadcast(:ok)
            end

            it "updates the organization" do
              expect { command.call }.to change(Organization, :count).by(1)
              organization = Organization.last

              expect(organization.basic_auth_username).to eq(basic_auth_username)
              expect(organization.basic_auth_password).to eq(basic_auth_password)
            end
          end

          context "and has 'users_auto_deletion_settings' params" do
            let(:params) do
              {
                name: ::Faker::Company.name,
                host: ::Faker::Internet.domain_name,
                users_registration_mode: "existing",
                file_upload_settings: params_for_uploads(upload_settings),
                users_auto_deletion_settings: users_auto_deletion_settings
              }
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

            it "returns a valid response" do
              expect { command.call }.to broadcast(:ok)
            end

            it "updates the organization" do
              expect { command.call }.to change(Organization, :count).by(1)
              organization = Organization.last

              expect(organization.users_auto_deletion_settings).to eq(users_auto_deletion_settings)
            end
          end
        end

        private

        def params_for_uploads(hash)
          hash.to_h do |key, value|
            case value
            when Hash
              value = params_for_uploads(value)
            when Array
              value = value.join(",")
            end

            [key, value]
          end
        end
      end
    end
  end
end
