import React, { useState } from 'react'
import axios from 'axios'
import MatrixContainer from '../../matrixcontainer'
import Vector from '../../matrix/vector'
import useJacobiMethodLinearEquation from '../../../actions/jacobiMethodLinearEquationAction'

const JacobMethodLinearEquation = () => {
  const title = "ヤコビ法"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])
  const [iter, setIter] = useState(0)
  const { size, coefficientMatrix, rightHandSideVector } = useJacobiMethodLinearEquation()

  const execute = async () => {
    setExecuted(false)
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/linear_equation/jacobi_method', {
          "size": size,
          "matrix": coefficientMatrix,
          "b": rightHandSideVector
        })

        setStatus(result.data.status === 'SUCCESS')
        setSolutionVector(result.data.ans)
        setIter(result.data.count)
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
      iter={
        executed &&
        iter
      }
      setStatus={ setStatus }
      setExecuted={ setExecuted }
      useLinearEquation={ useJacobiMethodLinearEquation }
    / >
  )
}

export default JacobMethodLinearEquation