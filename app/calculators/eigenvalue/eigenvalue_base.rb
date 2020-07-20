require 'matrix'

module Eigenvalue
  class EigenvalueBase

    def initialize(a, eps = 1e-6, n = 1000)
      @mat_a = Matrix[*a].map(&:to_f)
      @eps = eps
      @n = n.to_i
    end

    def core
    end

    def run
      self.core

      @status = 'SUCCESS'
      if @iter > @n
        @status = 'FAILURE'
        @eigenvalue = 0
      end

      [@eigenvalue, @status]
    end
  end
end
