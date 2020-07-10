import { updateValues, changeSize, changeMatrixValue, changeVectorValue} from '../lib/linearequation'

test('updateValues must be return a scalar, a vector, a matrix', () => {
  const [ size, matrix, vector] = updateValues(5)

  expect(size).toBe(5)
  expect(matrix.length).toBe(5)
  expect(vector.length).toBe(5)
  for (let i = 0; i < matrix.length; ++i) {
    expect(matrix[i].length).toBe(5)
  }
})
