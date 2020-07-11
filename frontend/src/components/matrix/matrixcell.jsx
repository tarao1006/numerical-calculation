import React from 'react'
import Cell from './cell'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const MatrixCell = ({ x, y, val, readOnly }) => {

  const { changeCoefficientMatrixValue } = useJacobiMethodLinearEquation()

  return (
    <Cell
      x={x}
      y={y}
      val={val}
      onValueChange={ changeCoefficientMatrixValue }
      readOnly={ readOnly }
    />
  )
}

export const BlackCell = () => {

  return (
    <Cell readOnly black/>
  )
}

export default MatrixCell
