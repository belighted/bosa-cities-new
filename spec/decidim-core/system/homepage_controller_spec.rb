# frozen_string_literal: true

require "spec_helper"

module Decidim
  describe HomepageController, type: :system do
    let(:organization) { create(:organization) }
    let(:basic_auth_username) { 'username' }
    let(:basic_auth_password) { 'password' }

    before do
      switch_to_host(organization.host)
      visit decidim.root_path
    end

    describe "basic auth" do
      context "when not set" do
        it { expect(page).to have_content(organization.name)}
      end

      context "when set in ENV variables" do
        before do
          # ENV['BASIC_AUTH_REQUIRED'] = 'true'
          # ENV['BASIC_AUTH_USERNAME'] = basic_auth_username
          # ENV['BASIC_AUTH_PASSWORD'] = basic_auth_password
          allow(Rails.application.config).to receive(:basic_auth_required).and_return(true)
          allow(Rails.application.config).to receive(:basic_auth_username).and_return(basic_auth_username)
          allow(Rails.application.config).to receive(:basic_auth_password).and_return(basic_auth_password)
          visit decidim.root_path
        end

        context "when not providing any credentials" do
          it { expect(page).to have_content("HTTP Basic: Access denied.") }
        end

        context "when providing invalid credentials" do
          before { visit_with_basic_auth(current_url, 'wrong_username', 'wrong_password') }

          it { expect(page).to have_content("HTTP Basic: Access denied.") }
        end

        context "when providing valid credentials" do
          before { visit_with_basic_auth(current_url, basic_auth_username, basic_auth_password) }

          it { expect(page).to have_content(organization.name) }
        end

        context "and when set in organization as well" do
          let(:org_basic_auth_username) { 'org_username' }
          let(:org_basic_auth_password) { 'org_password' }
          let(:organization) { create(:organization,
                                      basic_auth_username: org_basic_auth_username,
                                      basic_auth_password: org_basic_auth_password) }

          context "when not providing any credentials" do
            it { expect(page).to have_content("HTTP Basic: Access denied.") }
          end

          context "when providing invalid credentials" do
            before { visit_with_basic_auth(current_url, 'wrong_username', 'wrong_password') }

            it { expect(page).to have_content("HTTP Basic: Access denied.") }
          end

          context "when providing invalid credentials (from ENV variables)" do
            before { visit_with_basic_auth(current_url, basic_auth_username, basic_auth_password) }

            it { expect(page).to have_content("HTTP Basic: Access denied.") }
          end

          context "when providing valid credentials" do
            before { visit_with_basic_auth(current_url, org_basic_auth_username, org_basic_auth_password) }

            it { expect(page).to have_content(organization.name) }
          end
        end
      end

      context "when set in organization" do
        let(:organization) { create(:organization,
                                    basic_auth_username: basic_auth_username,
                                    basic_auth_password: basic_auth_password) }

        context "when not providing any credentials" do
          it { expect(page).to have_content("HTTP Basic: Access denied.") }
        end

        context "when providing invalid credentials" do
          before { visit_with_basic_auth(current_url, 'wrong_username', 'wrong_password') }

          it { expect(page).to have_content("HTTP Basic: Access denied.") }
        end

        context "when providing valid credentials" do
          before { visit_with_basic_auth(current_url, basic_auth_username, basic_auth_password) }

          it { expect(page).to have_content(organization.name) }
        end
      end

      private

      def visit_with_basic_auth(url, username, password)
        visit "#{url.split("//").first}//#{username}:#{password}@#{url.split("//").last}"
      end
    end
  end
end
