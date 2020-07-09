import React, { useState } from 'react'
import axios from 'axios'
import MatrixContainer from '../../components/matrixcontainer'
import Vector from '../../components/matrix/vector'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const SorMethodLinearEquation = () => {
  const title = "SOR法"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])
  const { size, coefficientMatrix, rightHandSideVector } = useJacobiMethodLinearEquation()

  const execute = async () => {
    setExecuted(false)
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/linear_equation/sor_method', {
          "size": size,
          "matrix": coefficientMatrix,
          "b": rightHandSideVector
        })

        setStatus(result.data.status === 'SUCCESS')
        setSolutionVector(result.data.ans)
        setExecuted(true)
      } catch (error) {
        setStatus(false)
    }
  }

  return (
    <MatrixContainer
      title={ title }
      execute={ execute }
      status={ status }
      executed={ executed }
      result={
        executed &&
          <Vector
            size={ solutionVector.length }
            values={ solutionVector }
            readOnly={ true }
          />
      }
      setStatus={ setStatus }
      setExecuted={ setExecuted }
    / >
  )
}

export default SorMethodLinearEquation
