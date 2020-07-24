require 'matrix'
require_relative './eigenvalue_base'

module Eigenvalue
  class PowerMethod < EigenvalueBase

    def find_abs_max_idx(vec)
      max_idx = 0
      max_val = vec[0]
      (0...vec.size).each do |i|
        if vec[i].abs > max_val.abs
          max_idx = i
          max_val = vec[i]
        end
      end

      max_idx
    end

    def core
      @iter = 0
      x = Vector[*Array.new(@mat_a.column_size) { rand }]
      max_idx = find_abs_max_idx x
      x /= x[max_idx]
      r = new_r = 0

      while true
        @iter += 1
        new_x = @mat_a * x
        new_r = new_x[max_idx] / x[max_idx]
        max_idx = find_abs_max_idx new_x
        new_x = new_x / new_x[max_idx]
      
        if (new_r - r).abs < @eps * r.abs or @iter > @n
          break
        else
          x = new_x.clone
          r = new_r
        end
      end

      @eigenvalue =  new_r
    end
  end
end
