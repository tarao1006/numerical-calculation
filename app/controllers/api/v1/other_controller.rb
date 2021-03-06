require_relative '../../../calculators/other/lu_decomposition'
require_relative '../../../calculators/other/forward_substitution'
require_relative '../../../calculators/other/backward_substitution'

module Api
  module V1
    class OtherController < ApplicationController

      def forward_substitution
        mat = params[:matrix]
        b = params[:b]

        calculator = Other::ForwardSubstitution.new(mat, b)
        ans = calculator.run

        render json: { status: 'SUCCESS', ans: ans}, status: :ok
      end

      def backward_substitution
        mat = params[:matrix]
        b = params[:b]

        calculator = Other::BackwardSubstitution.new(mat, b)
        ans = calculator.run

        render json: { status: 'SUCCESS', ans: ans}, status: :ok
      end

      def lu_decomposition
        mat = params[:matrix]

        calculator = Other::LuDecomposition.new(mat)
        matrix_l, matrix_u, matrix_p = calculator.run

        status = (matrix_l.to_a.length == 0) ? 'FAILURE' : 'SUCCESS'

        render json: { status: status, matrixL: matrix_l, matrixU: matrix_u, matrixP: matrix_p }, status: :ok
      end
    end
  end
end