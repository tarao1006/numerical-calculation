require 'matrix'

class IterativeMethodBase

  def core
  end

  def run(a, b)
    @eps = 1e-15

    @mat_a = Matrix[*a].map(&:to_f)
    @mat_b = Vector[*b].map(&:to_f)

    @n = @mat_a.column_size

    random = Random.new(1)
    @old_x = Vector.zero(@n).map{ |x| x + random.rand }
    @new_x = Vector.zero(@n).map{ |x| x + random.rand }

    @iter = 0

    self.core

    if @iter > 1000
      @new_x = Vector[]
      @iter = -1
    end

    [@new_x, @iter]
  end
end
