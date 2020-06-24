require_relative './base'

class ForwardSubstitution

  def self.run(a, b)
    a = Matrix[*a].map(&:to_f)
    b = Vector[*b].map(&:to_f)
    b[0] /= a[0, 0]
    (1...b.size).each do |i|
      (0...i).each do |j|
        b[i] -= b[j] * a[i, j]
      end
      b[i] /= a[i, i]
    end

    b
  end
end
