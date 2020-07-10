import { useDispatch, useSelector } from 'react-redux'

export const UPDATE = 'UPDATE'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_COEFFICIENT_MATRIX_VALUE = 'CHANGE_COEFFICIENT_MATRIX_VALUE'
export const CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE = 'CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE'
export const CHANGE_RELAXATION_PARAMETER_VALUE = 'CHANGE_RELAXATION_PARAMETER_VALUE'

const useSorMethodLinearEquation = () => {
  const size = useSelector(state => state.sorMethodLinearEquation.size)
  const coefficientMatrix = useSelector(state => state.sorMethodLinearEquation.coefficientMatrix)
  const rightHandSideVector = useSelector(state => state.sorMethodLinearEquation.rightHandSideVector)
  const relaxationParameter = useSelector(state => state.sorMethodLinearEquation.relaxationParameter)
  const dispatch = useDispatch()

  const update = (size, mat, vec) => {
    dispatch({
      type: UPDATE,
      size,
      mat,
      vec
    })
  }

  const increment = () => {
    dispatch({
      type: INCREMENT
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT
    })
  }

  const changeCoefficientMatrixValue = (x, y, value) => {
    dispatch({
      type: CHANGE_COEFFICIENT_MATRIX_VALUE,
      x,
      y,
      value
    })
  }

  const changeRightHandSideVectorValue = (x, y, value) => {
    dispatch({
      type: CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE,
      x,
      y,
      value
    })
  }

  const changeRelaxationParameterValue = value => {
    dispatch({
      type: CHANGE_RELAXATION_PARAMETER_VALUE,
      value
    })
  }

  return {
    size,
    coefficientMatrix,
    rightHandSideVector,
    relaxationParameter,
    update,
    increment,
    decrement,
    changeCoefficientMatrixValue,
    changeRightHandSideVectorValue,
    changeRelaxationParameterValue
  }
}

export default useSorMethodLinearEquation
