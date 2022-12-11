# frozen-string_literal: true

module Decidim
  module Users
    class UserMarkedForAutoDeletionEvent < Decidim::Events::SimpleEvent
      i18n_attributes :date, :sign_in_url

      def resource_path
        ""
      end

      def resource_url
        ""
      end

      def date
        extra[:date]
      end

      def sign_in_url
        extra[:sign_in_url]
      end
    end
  end
end
