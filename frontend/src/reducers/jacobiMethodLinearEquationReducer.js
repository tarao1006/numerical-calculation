import {
  UPDATE,
  INCREMENT,
  DECREMENT,
  CHANGE_COEFFICIENT_MATRIX_VALUE,
  CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE
} from '../actions/jacobiMethodLinearEquationAction';
import { updateValues, changeMatrixValue, changeVectorValue, changeSize } from '../lib/linearequation'

const defaultSize = 5
const [size, defaultCoefficientMatrix, defaultRightHandSideVector] = updateValues(defaultSize)

const initialState = {
  size: size,
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
