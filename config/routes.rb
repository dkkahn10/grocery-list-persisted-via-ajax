Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    resources :groceries, only: [:index, :create, :destroy]
  end
end
