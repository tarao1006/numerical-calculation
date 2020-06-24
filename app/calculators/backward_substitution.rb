require_relative './base'

class BackwardSubstitution

  def self.run(a, b)
    a = Matrix[*a].map(&:to_f)
    b = Vector[*b].map(&:to_f)

    n = b.size - 1
    b[n] /= a[n, n]

    (n - 1).downto(0) do |i|
      n.downto(i + 1) do |j|
        b[i] -= b[j] * a[i, j]
      end

      b[i] /= a[i, i]
    end

    b
  end
end