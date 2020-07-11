require_relative '../../../calculators/linear_equation/jacobi_method'
require_relative '../../../calculators/linear_equation/gauss_seidel_method'
require_relative '../../../calculators/linear_equation/sor_method'


module Api
  module V1
    class LinearequationController < ApplicationController

      def echo
        render json: { status: 'SUCCESS', data: params[:data] }
      end

      def jacobi_method
        mat = params[:matrix]
        b = params[:b]

        calculator = JacobiMethod.new(mat, b)
        ans, iter = calculator.run

        status = if (ans.to_a.length == 0) and iter < 0
                   'FAILURE'
                 else
                   'SUCCESS'
                 end

        render json: { status: status, ans: ans, count: iter, mat: mat, b: b }
      end

      def gauss_seidel_method
        mat = params[:matrix]
        b = params[:b]

        calculator = GaussSeidelMethod.new(mat, b)
        ans, iter = calculator.run

        status = if (ans.to_a.length == 0) and iter < 0
                   'FAILURE'
                 else
                   'SUCCESS'
                 end

        render json: { status: status, ans: ans, count: iter, mat: mat, b: b }
      end

      def sor_method
        mat = params[:matrix]
        b = params[:b]
        omega = params[:omega] ? params[:omega] : 1.5

        calculator = SorMethod.new(mat, b, omega)
        ans, iter = calculator.run

        status = if (ans.to_a.length == 0) and iter < 0
                   'FAILURE'
                 else
                   'SUCCESS'
                 end

        render json: { status: status, ans: ans, count: iter, mat: mat, b: b }
      end
    end
  end
end
