require 'matrix'

class IterativeMethodBase

  def is_square_matrix(mat)
    mat.column_size == mat.row_size
  end

  def is_diagonally_dominant_matrix(mat)
    unless is_square_matrix mat
      return false
    end

    n = mat.row_size

    (0...n).each do |i|
      s = 0.0
      (0...n).each do |j|
        unless i == j
          s += mat[i, j]
        end
      end

      if mat[i, i] < s
        return false
      end
    end

    true
  end

  def initialize(a, b)
    @mat_a = Matrix[*a].map(&:to_f)
    @mat_b = Vector[*b].map(&:to_f)
    @n = @mat_a.column_size
  end

  def core
  end

  def validate
    @is_valid = true
    if (!is_square_matrix(@mat_a)) or (@mat_a.row_size != @mat_b.size)
      @is_valid = false
    end

    @is_valid = is_diagonally_dominant_matrix @mat_a
  end

  def run
    @eps = 1e-15

    self.validate

    unless @is_valid
      return [Vector[], -1]
    end

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
