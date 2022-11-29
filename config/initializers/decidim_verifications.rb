# frozen_string_literal: true

Decidim::Verifications.register_workflow(:participant_impersonation_handler) do |workflow|
  workflow.form = "ParticipantImpersonationHandler"
end
