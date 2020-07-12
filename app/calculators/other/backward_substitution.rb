require_relative './other_base'

module Other
  class BackwardSubstitution < OtherBase

    def core
      n = @mat_b.size - 1
      @mat_b[n] /= @mat_a[n, n]

      (n - 1).downto(0) do |i|
        n.downto(i + 1) do |j|
          @mat_b[i] -= @mat_b[j] * @mat_a[i, j]
        end

        @mat_b[i] /= @mat_a[i, i]
      end
    end
  end
end