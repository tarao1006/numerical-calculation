class HomeController < ApplicationController

  def home
    render json: { status: 'SUCCESS' }, status: :ok
  end
end
