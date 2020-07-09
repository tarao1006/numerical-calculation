export const UPDATE = 'UPDATE'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_COEFFICIENT_MATRIX_VALUE = 'CHANGE_COEFFICIENT_MATRIX_VALUE';
export const CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE = 'CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE';

export const update = (size, mat, vec) => {
  return {
    type: UPDATE,
    size,
    mat,
    vec
  }
}

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const changeCoefficientMatrixValue = (x, y, value) => {
  return {
    type: CHANGE_COEFFICIENT_MATRIX_VALUE,
    x,
    y,
    value
  }
}

export const changeRightHandSideVectorValue = (x, y, value) => {
  return {
    type: CHANGE_RIGHT_HAND_SIDE_VECTOR_VALUE,
    x,
    y,
    value
  }
}
