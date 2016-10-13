Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :update, :destroy] do
      collection do
        get 'suggestions'
      end
      resources :likes, only: [] do
        collection do
          get 'count'
          get 'total'
        end
      end
    end
    resources :comments, only: [:create, :update, :destroy] do
      resources :likes, only: [] do
        collection do
          get 'count'
          get 'total'
        end
      end
    end
    resources :likes, only: [:create, :destroy]
    resources :subscriptions, only: [:index, :create, :destroy]
  end

  root to: 'static_pages#root'
end
