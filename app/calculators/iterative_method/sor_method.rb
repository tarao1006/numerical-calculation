require 'matrix'
require_relative './iterative_method_base'

class SorMethod < IterativeMethodBase

  def initialize(a, b, omega = 1.5)
    super(a, b)
    @omega = omega
  end

  def validate
    super

    _, d, _ = @mat_a.eigensystem
    d.row_vectors.each do |e|
      begin
        if e.sum < 1
          @is_valid = false
          break
        end
      rescue
        @is_valid = false
      end
    end
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
