require 'matrix'
require_relative './base'

class LuDecomposition < Base

  def max_index(vec)
    m_idx = 0
    m = vec[m_idx]
    vec.each_with_index do |e, i|
      if e.abs > m.abs
        m = e
        m_idx = i
      end
    end

    m_idx
  end

  def pivot(i, j, mat)
    n = mat.column_size
    a = mat.row(i)
    b = mat.row(j)
    (0...n).each do |k|
      mat[i, k], mat[j, k] = b[k], a[k]
    end

    mat
  end

  def calculate(mat)
    mat = Matrix[*mat].map(&:to_f)
    n = mat.row_size
    mat_p = Matrix.identity(n).map(&:to_f)
    (0...n).each do |i|
      m_idx = max_index mat.column(i)[i..-1]
      m_idx += i
      mat = pivot(i, m_idx, mat)
      mat_p = pivot(i, m_idx, mat_p)
      ((i+1)...n).each do |j|
        mat[j, i] /= mat[i, i]
        ((i+1)...n).each do |k|
          mat[j, k] -= mat[j, i] * mat[i, k]
        end
      end
    end
    mat_l = Matrix.build(n) { 0.0 }
    mat_u = Matrix.build(n) { 0.0 }
    (0...n).each do |i|
      (0...n).each do |j|
        if i == j
          mat_l[i, j] = 1
          mat_u[i, j] = mat[i, j]
        elsif i > j
          mat_l[i, j] = mat[i, j]
        else
          mat_u[i, j] = mat[i, j]
        end
      end
    end

    [mat_l, mat_u]
  end
end
