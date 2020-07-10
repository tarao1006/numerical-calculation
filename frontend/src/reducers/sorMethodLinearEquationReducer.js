import { v4 as uuidv4 } from 'uuid'
import {  CHANGE_RELAXATION_PARAMETER_VALUE } from '../actions/sorMethodLinearEquationAction';
import {
  UPDATE,
  INCREMENT,
  DECREMENT,
  CHANGE_COEFFICIENT_MATRIX_VALUE,
  CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE
} from '../actions/matrix';
import { updateValues, changeMatrixValue, changeVectorValue, changeSize } from '../lib/linearequation'

const defaultSize = 5
const [size, defaultCoefficientMatrix, defaultRightHandSideVector] = updateValues(defaultSize)
const defaultRelaxationParameter = 1.5

const initialState = {
  size: size,
  coefficientMatrix: defaultCoefficientMatrix,
  rightHandSideVector: defaultRightHandSideVector,
  relaxationParameter: defaultRelaxationParameter,
  id: uuidv4()
}

const sorMethodLinearEquation = (state = initialState, action) => {

  let newSize
  let newCoefficientMatrix
  let newRightHandSideVector

  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        size: action.size,
        coefficientMatrix: action.mat,
        rightHandSideVector: action.vec,
        id: uuidv4()
      }
    case INCREMENT:
      [newSize, newCoefficientMatrix, newRightHandSideVector] = changeSize(state.size + 1, state.coefficientMatrix, state.rightHandSideVector)
      return {
        ...state,
        size: newSize,
        coefficientMatrix: newCoefficientMatrix,
        rightHandSideVector: newRightHandSideVector,
        id: uuidv4()
      }
    case DECREMENT:
      [newSize, newCoefficientMatrix, newRightHandSideVector] = changeSize(state.size - 1, state.coefficientMatrix, state.rightHandSideVector)
      return {
        ...state,
        size: newSize,
        coefficientMatrix: newCoefficientMatrix,
        rightHandSideVector: newRightHandSideVector,
        id: uuidv4()
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
    case CHANGE_RELAXATION_PARAMETER_VALUE:
      return {
        ...state,
        relaxationParameter: action.value
      }
    default:
      return state
  }
}

export default sorMethodLinearEquation
