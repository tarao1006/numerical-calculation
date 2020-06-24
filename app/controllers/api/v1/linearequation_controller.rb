require_relative '../../../calculators/jacobi_method'
require_relative '../../../calculators/gauss_seidel_method'


module Api
  module V1
    class LinearequationController < ApplicationController

      def jacobi_method
        mat = params[:matrix]
        b = params[:b]

        calculator = JacobiMethod.new
        ans, iter = calculator.run(mat, b)

        render json: { status: 'SUCCESS', ans: ans, count: iter }
      end

      def gauss_seidel_method
        mat = params[:matrix]
        b = params[:b]

        calculator = GaussSeidelMethod.new
        ans, iter = calculator.run(mat, b)

        render json: { status: 'SUCCESS', ans: ans, count: iter }
      end

      def sor_method
        mat = params[:matrix]
        b = params[:b]

        calculator = SorMethod.new
        ans, iter = calculator.run(mat, b)

        render json: { status: 'SUCCESS', ans: ans, count: iter }
      end
    end
  end
end
