require_relative './other_base'

class ForwardSubstitution < OtherBase

  def core
    @mat_b[0] /= @mat_a[0, 0]
    (1...@mat_b.size).each do |i|
      (0...i).each do |j|
        @mat_b[i] -= @mat_b[j] * @mat_a[i, j]
      end
      @mat_b[i] /= @mat_a[i, i]
    end
  end
end
