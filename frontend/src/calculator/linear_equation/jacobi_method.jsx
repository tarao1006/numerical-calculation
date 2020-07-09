import React from 'react'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const JacobMethodLinearEquation = () => {
  const [ size, coefficientMatrix, rightHandSideVector, update,
    increment, decrement, changeCoefficientMatrixValue, changeRightHandSideVectorValue ] = useJacobiMethodLinearEquation()

    return (
    <>
      ヤコビ法
    </>
  )
}

export default JacobMethodLinearEquation
