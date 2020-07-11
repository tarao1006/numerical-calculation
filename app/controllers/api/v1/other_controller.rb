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
        mat = params[:matrix]

        calculator = LuDecomposition.new(mat)
        matrix_l, matrix_u, matrix_p = calculator.calculate

        render json: { status: 'SUCCESS', size: size, matrixL: matrix_l, matrixU: matrix_u, matrixP: matrix_p }, status: :ok
      end
    end
  end
end