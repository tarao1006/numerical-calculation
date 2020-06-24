require 'matrix'
require_relative './iterative_method'

class SorMethod < IterativeMethod

  def core(omega = 1.4)
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
        @new_x[i] = @old_x[i] + omega * (@new_x[i] - @old_x[i])
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

      if @iter > 1000
        @new_x = Vector[]
        @iter = -1
      end
    end
  end
end
