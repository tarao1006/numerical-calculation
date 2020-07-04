Rails.application.routes.draw do

  root 'home#home'

  namespace 'api' do
    namespace 'v1' do
      post '/calculator/forward_substitution', to: 'calculator#forward_substitution'
      post '/calculator/backward_substitution', to: 'calculator#backward_substitution'
      post '/calculator/lu_decomposition', to: 'calculator#lu_decomposition'
      post '/linear_equation/jacobi_method', to: 'linearequation#jacobi_method'
      post '/linear_equation/gauss_seidel_method', to: 'linearequation#gauss_seidel_method'
      post '/linear_equation/sor_method', to: 'linearequation#sor_method'

      post '/linear_equation/echo', to: 'linearequation#echo'
    end
  end
end
