Rails.application.routes.draw do
  get 'legal/index'
  get 'reachout/index'
  get 'about/index'
  get 'welcome/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
