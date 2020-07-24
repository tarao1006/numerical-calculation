Rails.application.routes.draw do

  root 'home#home'

  namespace 'api' do
    namespace 'v1' do
      post '/other/forward_substitution', to: 'other#forward_substitution'
      post '/other/backward_substitution', to: 'other#backward_substitution'
      post '/other/lu_decomposition', to: 'other#lu_decomposition'
      post '/linear_equation/jacobi_method', to: 'linearequation#jacobi_method'
      post '/linear_equation/gauss_seidel_method', to: 'linearequation#gauss_seidel_method'
      post '/linear_equation/sor_method', to: 'linearequation#sor_method'
      post 'eigenvalue/power_method', to: 'eigenvalue#power_method'

      post '/linear_equation/echo', to: 'linearequation#echo'
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
