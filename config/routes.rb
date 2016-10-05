Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :update, :destroy]
  end

  root to: 'static_pages#root'
end
