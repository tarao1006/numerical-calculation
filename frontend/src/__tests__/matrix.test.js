import { updateValues, validateSize, changeSize, changeMatrixValue, changeVectorValue} from '../lib/linearequation'

const checkTwoDimMatrixSize = mat => {
  let res = true
  const n = mat.length
  for (let i = 0; i < n; ++i) {
    if (mat[i].length !== n) {
      res = false
      break
    }
  }

  return res
}

test('updateValues must be return a scalar, a vector, a matrix', () => {
  const setSize = 5
  const [ size, matrix, vector] = updateValues(setSize)

  expect(size).toBe(setSize)
  expect(matrix).toHaveLength(setSize)
  expect(vector).toHaveLength(setSize)
  expect(checkTwoDimMatrixSize(matrix)).toBe(true)
})

test('validateSize must return between 2 and 10', () => {
  expect(validateSize(0)).toBe(2)
  expect(validateSize(5)).toBe(5)
  expect(validateSize(20)).toBe(10)
})

test('changeSize must return designated size matrix and vector', () => {
  const setSize = 5
  const a = [[1,2,3],[4,5,6],[7,8,9]]
  const b = [1,2,3]
  const [ size, matrix, vector] = changeSize(setSize, a, b)

  expect(size).toBe(validateSize(setSize))
  expect(matrix).toHaveLength(setSize)
  expect(vector).toHaveLength(setSize)
  expect(checkTwoDimMatrixSize(matrix)).toBe(true)
})
