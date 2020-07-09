import React from 'react'
import Cell from './cell'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const VectorCell = ({ x, y, val, readOnly }) => {

  const { changeRightHandSideVectorValue } = useJacobiMethodLinearEquation()

  return (
    <Cell
      x={x}
      y={y}
      val={val}
      onValueChange={ changeRightHandSideVectorValue }
      readOnly={ readOnly }
    />
  )
}

export default VectorCell
