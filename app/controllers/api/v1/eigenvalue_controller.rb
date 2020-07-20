require_relative '../../../calculators/eigenvalue/power_method'

module Api
  module V1
    class EigenvalueController < ApplicationController

      def power_method
        mat = params[:matrix]

        calculator = Eigenvalue::PowerMethod.new mat
        ans, status = calculator.run

        p ans
        render json: { status: status, ans: ans }
      end
    end
  end
end
