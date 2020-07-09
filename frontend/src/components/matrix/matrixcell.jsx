import React from 'react'
import Cell from './cell'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const MatrixCell = ({ x, y, val }) => {

  const { changeCoefficientMatrixValue } = useJacobiMethodLinearEquation()

  return (
    <Cell
      x={x}
      y={y}
      val={val}
      onValueChange={ changeCoefficientMatrixValue }
    />
  )
}

export default MatrixCell
