require 'matrix'
require_relative './linear_equation_base'

class SorMethod < LinearEquationBase

  def initialize(a, b, omega = 1.5)
    super(a, b)
    @omega = omega
  end

  def validate_omega
    if @omega >= 2.0 or @omega <= 0
      @omega = 1.5
    end
  end

  def core
    validate_omega

    while true do
      @iter = @iter.succ
      (0...@n).each do |i|
        tmp = 0.0
        (0...@n).each do |j|
          if i == j
            next
          end
          if j < i
            tmp += @mat_a[i, j] * @new_x[j]
          else
            tmp += @mat_a[i, j] * @old_x[j]
          end
        end

        @new_x[i] = (@mat_b[i] - tmp) / @mat_a[i, i]
        @new_x[i] = @old_x[i] + @omega * (@new_x[i] - @old_x[i])
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
