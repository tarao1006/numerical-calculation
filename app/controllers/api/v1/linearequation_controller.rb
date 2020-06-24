require_relative '../../../calculators/iterative_method/jacobi_method'
require_relative '../../../calculators/iterative_method/gauss_seidel_method'
require_relative '../../../calculators/iterative_method/sor_method'


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
        omega = params[:omega] ? params[:omega] : 1.5

        calculator = SorMethod.new omega
        ans, iter = calculator.run(mat, b)

        render json: { status: 'SUCCESS', ans: ans, count: iter }
      end
    end
  end
end
