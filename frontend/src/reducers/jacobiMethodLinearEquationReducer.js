import {
  UPDATE,
  INCREMENT,
  DECREMENT,
  CHANGE_COEFFICIENT_MATRIX_VALUE,
  CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE
} from '../actions/jacobiMethodLinearEquationAction';

const defaultSize = 5
let defaultCoefficientMatrix = []
let defaultRightHandSideVector = []
for (let i = 0; i < defaultSize; ++i) {
  let row = []
  for (let j = 0; j < defaultSize; ++j) {
    if (i == j) row.push((Math.floor(Math.random() * 10)) * 10);
    else if (Math.abs(i - j) <= 1) row.push((Math.floor(Math.random() * 10)) * 2);
    else row.push(0)
  }
  defaultCoefficientMatrix.push(row)
}
for (let i = 0; i < defaultSize; ++i) {
  defaultRightHandSideVector.push(Math.floor(Math.random() * 10) - 5);
}

export const updateValues = size => {
  let newCoefficientMatrix = []
  let newRightHandSideVector = []
  for (let i = 0; i < size; ++i) {
    let row = []
    for (let j = 0; j < size; ++j) {
      if (i == j) row.push((Math.floor(Math.random() * 10)) * 10);
      else if (Math.abs(i - j) <= 1) row.push((Math.floor(Math.random() * 10)) * 2);
      else row.push(0)
    }
    newCoefficientMatrix.push(row)
  }
  for (let i = 0; i < size; ++i) {
    newRightHandSideVector.push(Math.floor(Math.random() * 10) - 5);
  }

  return [ size, newCoefficientMatrix, newRightHandSideVector ]
}

const initialState = {
  size: 5,
  coefficientMatrix: defaultCoefficientMatrix,
  rightHandSideVector: defaultRightHandSideVector
}

const jacobiMethodLinearEquation = (state = initialState, action) => {

  let newSize
  let newCoefficientMatrix
  let newRightHandSideVector

  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        size: action.size,
        coefficientMatrix: action.mat,
        rightHandSideVector: action.vec
      }
    case INCREMENT:
      [newSize, newCoefficientMatrix, newRightHandSideVector] = changeSize(state.size + 1, state.coefficientMatrix, state.rightHandSideVector)
      return {
          ...state,
          size: newSize,
          coefficientMatrix: newCoefficientMatrix,
          rightHandSideVector: newRightHandSideVector
      }
    case DECREMENT:
      [newSize, newCoefficientMatrix, newRightHandSideVector] = changeSize(state.size - 1, state.coefficientMatrix, state.rightHandSideVector)
      return {
          ...state,
          size: newSize,
          coefficientMatrix: newCoefficientMatrix,
          rightHandSideVector: newRightHandSideVector
      }
    case CHANGE_COEFFICIENT_MATRIX_VALUE:
      return {
        ...state,
        coefficientMatrix: changeMatrixValue(action.x, action.y, state.coefficientMatrix, action.value)
      }
    case CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE:
      return {
        ...state,
        rightHandSideVector: changeVectorValue(action.x, action.y, state.rightHandSideVector, action.value)
      }
    default:
      return state
  }
}

export default jacobiMethodLinearEquation

const changeSize = (size, coefficientMatrix, rightHandSideVector) => {
  const oldSize = coefficientMatrix.length
  let newSize = Number.parseInt(size)
  if (newSize >= 10) {
    newSize = 10
  } else if (newSize <= 2) {
    newSize = 2
  }

  let newCoefficientMatrix = []
  let newRightHandSideVector = []
  if (oldSize < newSize) {
    for (let i = 0; i < newSize; ++i) {
      let newRow = []
      for (let j = 0; j < newSize; ++j) {
        if (i >= oldSize || j >= oldSize) {
          newRow.push(0)
        } else{
          newRow.push(coefficientMatrix[i][j])
        }
      }
      newCoefficientMatrix.push(newRow)
    }
    for (let i = 0; i < newSize; ++i) {
      if (i >= oldSize) {
        newRightHandSideVector.push(0)
      } else{
        newRightHandSideVector.push(rightHandSideVector[i])
      }
    }
  } else {
    for (let i = 0; i < newSize; ++i) {
      let newRow = []
      for (let j = 0; j < newSize; ++j) {
        newRow.push(coefficientMatrix[i][j])
      }
      newCoefficientMatrix.push(newRow)
    }
    for (let i = 0; i < newSize; ++i) {
      newRightHandSideVector.push(rightHandSideVector[i])
    }
  }
  return [newSize, newCoefficientMatrix, newRightHandSideVector]
}

const changeMatrixValue = (x, y, values, val) => {
  let res = [].concat(values)
  res[x][y] = val
  return res
}

const changeVectorValue = (i, j, values, val) => {
  let res = [].concat(values)
  res[i] = val
  return res
}
