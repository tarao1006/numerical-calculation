require 'matrix'
require_relative './linear_equation_base'

module LinearEquation
  class JacobiMethod < LinearEquationBase

    def core
      while true do
        @iter = @iter.succ
        (0...@n).each do |i|
          tmp = 0.0
          (0...@n).each do |j|
            if i != j
              tmp += @mat_a[i, j] * @old_x[j]
            end
          end

          @new_x[i] = (@mat_b[i] - tmp) / @mat_a[i, i]
        end

        err = 0.0
        (0...@n).each do |i|
          err += (@old_x[i] - @new_x[i]).abs
        end
        if err < @eps
          break
        else
          @old_x = @new_x.clone
        end
      end
    end
  end
end
