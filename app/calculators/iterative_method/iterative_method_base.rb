require 'matrix'

class IterativeMethodBase

  def initialize(a, b)
    @mat_a = Matrix[*a].map(&:to_f)
    @mat_b = Vector[*b].map(&:to_f)
  end

  def core
  end

  def validate
    @is_valid = true
    if (@mat_a.column_size != @mat_a.row_size) or (@mat_a.row_size != @mat_b.size)
      @is_valid = false
    end
  end

  def run
    @eps = 1e-15

    self.validate

    unless @is_valid
      return [Vector[], -1]
    end

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
