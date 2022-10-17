# frozen_string_literal: true

class ParticipantImpersonationHandler < Decidim::AuthorizationHandler
  attribute :name_and_surname, String
  attribute :document_number, String
  attribute :postal_code, String
  attribute :birthday, Decidim::Attributes::LocalizedDate
  attribute :scope_id, Integer

  validates :document_number, presence: true

  validate :valid_document_number
  validate :valid_scope_id

  # If set, enforces the handler to validate the uniqueness of the field
  #
  def unique_id
    document_number
  end

  def scope
    user.organization.scopes.find_by(id: scope_id) if scope_id
  end

  def metadata
    super.merge(document_number: document_number, postal_code: postal_code, scope_id: scope_id)
  end

  private

  def valid_document_number
    errors.add(:document_number, :invalid) unless document_number =~ /\A[a-zA-Z0-9]+\z/
  end

  def valid_scope_id
    errors.add(:scope_id, :invalid) if scope_id && !scope
  end
end
