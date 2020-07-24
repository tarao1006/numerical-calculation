import { useDispatch, useSelector } from 'react-redux'

export const UPDATE = 'UPDATE'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_COEFFICIENT_MATRIX_VALUE = 'CHANGE_COEFFICIENT_MATRIX_VALUE';
export const CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE = 'CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE';


const useMatrix = () => {

  const size = useSelector(state => state.linearEquation.size)
  const coefficientMatrix = useSelector(state => state.linearEquation.coefficientMatrix)
  const rightHandSideVector = useSelector(state => state.linearEquation.rightHandSideVector)
  const id = useSelector(state => state.linearEquation.id)
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

  return {
    size,
    coefficientMatrix,
    rightHandSideVector,
    id,
    update,
    increment,
    decrement,
    changeCoefficientMatrixValue,
    changeRightHandSideVectorValue
  }
}

export default useMatrix
