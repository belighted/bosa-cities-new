# frozen_string_literal: true

require "sidekiq/web"

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  authenticate :user, ->(u) { u.admin? } do
    mount Sidekiq::Web => "/sidekiq"
  end

  mount Decidim::Core::Engine => "/"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
