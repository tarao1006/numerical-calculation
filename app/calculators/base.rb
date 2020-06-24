
class Base

  def calculate(mat)

  end

  def validate(mat)
    if mat.is_a?(Array)
      rows = mat.size
      cols = mat[0].size

      return rows == cols
    end

    false
  end
end