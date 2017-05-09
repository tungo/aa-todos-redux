Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  defaults format: :json do
    namespace :api do
      resources :todos, only: [:index, :create, :show, :destroy, :update]
    end
  end

  root to: "static_pages#root"
end
