# frozen-string_literal: true

module Decidim
  module Users
    class UserAutoDeletedEvent < Decidim::Events::SimpleEvent
      def resource_path
        ""
      end

      def resource_url
        ""
      end
    end
  end
end
