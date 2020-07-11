require_relative '../../../calculators/other/lu_decomposition'
require_relative '../../../calculators/other/forward_substitution'
require_relative '../../../calculators/other/backward_substitution'

module Api
  module V1
    class OtherController < ApplicationController

      def forward_substitution
        mat = params[:matrix]
        b = params[:b]

        calculator = ForwardSubstitution.new(mat, b)
        ans = calculator.run

        render json: { status: 'SUCCESS', ans: ans}, status: :ok
      end

      def backward_substitution
        mat = params[:matrix]
        b = params[:b]

        calculator = BackwardSubstitution.new(mat, b)
        ans = calculator.run

        render json: { status: 'SUCCESS', ans: ans}, status: :ok
      end

      def lu_decomposition
        calculator = LuDecomposition.new
        size = params[:size]
        mat = Array(params[:matrix])

        unless calculator.validate(mat)
          render json: { status: 'ERROR' }, status: :ok
        end

        matrix_l, matrix_u = calculator.calculate(mat)

        render json: { status: 'SUCCESS', size: size, matrixL: matrix_l, matrixU: matrix_u }, status: :ok
      end
    end
  end
end