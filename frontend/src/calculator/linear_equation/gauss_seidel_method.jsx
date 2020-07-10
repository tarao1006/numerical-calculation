import React, { useState } from 'react'
import axios from 'axios'
import MatrixContainer from '../../components/matrixcontainer'
import Vector from '../../components/matrix/vector'
import useGaussSeidelMethodLinearEquation from '../../actions/gaussSeidelMethodLinearEquationAction'

const GaussSeidelMethodLinearEquation = () => {
  const title = "ガウス・ザイデル法"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])
  const [ iter, setIter ] = useState(0)
  const { size, coefficientMatrix, rightHandSideVector } = useGaussSeidelMethodLinearEquation()

  const execute = async () => {
    setExecuted(false)
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/linear_equation/gauss_seidel_method', {
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
      useLinearEquation={ useGaussSeidelMethodLinearEquation }
    / >
  )
}

export default GaussSeidelMethodLinearEquation
