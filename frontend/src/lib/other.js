import {
  createVector,
  createMatrix,
  createLowerTriangularMatrix,
  createUpperTriangularMatrix,
} from './matrix'

export const updateMatrix = size => {
  let newMatrix = createMatrix(size)
  let newVector = createVector(size)

  return [ size, newMatrix, newVector ]
}

export const updateLowerTriangularMatrix = size => {
  let newMatrix = createLowerTriangularMatrix(size)
  let newVector = createVector(size)

  return [ size, newMatrix, newVector ]
}

export const updateUpperTriangularMatrix = size => {
  let newMatrix = createUpperTriangularMatrix(size)
  let newVector = createVector(size)

  return [ size, newMatrix, newVector ]
}
