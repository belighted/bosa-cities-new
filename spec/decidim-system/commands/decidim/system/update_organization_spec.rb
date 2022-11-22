# frozen_string_literal: true

require "spec_helper"

# Original test should also pass normally
DecidimSpecLoader.run("decidim-system/spec/commands/decidim/system/update_organization_spec.rb")

module Decidim
  module System
    describe UpdateOrganization do
      describe "call" do
        let(:form) do
          UpdateOrganizationForm.new(params)
        end
        let(:organization) { create :organization, name: "My organization" }
        let(:command) { described_class.new(organization.id, form) }
        let(:basic_auth_username) { 'username' }
        let(:basic_auth_password) { 'password' }

        context "when the form is valid and has basic auth params" do
          let(:params) do
            {
              name: "Gotham City",
              host: "decide.gotham.gov",
              users_registration_mode: "existing",
              file_upload_settings: params_for_uploads(upload_settings),
              basic_auth_username: basic_auth_username,
              basic_auth_password: basic_auth_password
            }
          end
          let(:upload_settings) do
            Decidim::OrganizationSettings.default(:upload)
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
