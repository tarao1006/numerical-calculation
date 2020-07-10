import React, { useState } from 'react'
import axios from 'axios'
import SubstitutionContainer from '../../substitutioncontainer'
import Vector from '../../matrix/vector'
import useJacobiMethodLinearEquation from '../../../actions/jacobiMethodLinearEquationAction'

const BackwardSubstitution = () => {
  const title = "後退代入"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])
  const { size, coefficientMatrix, rightHandSideVector } = useJacobiMethodLinearEquation()

  const execute = async () => {
    setExecuted(false)
    setStatus(false)
    setLoading(true)
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/calculator/backward_substitution', {
          "size": size,
          "matrix": coefficientMatrix,
          "b": rightHandSideVector
        })

        setStatus(result.data.status === 'SUCCESS')
        setSolutionVector(result.data.ans)
        setIter(result.data.count)
        setExecuted(true)
        console.log(result)
      } catch (error) {
        setStatus(false)
    }
    setLoading(false)
  }

  return (
    <>
      <SubstitutionContainer
        title={ title }
        execute={ execute }
        status={ status }
        executed={ executed }
        loading={ loading }
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
        useLinearEquation={ useJacobiMethodLinearEquation }
        forward={ false }
      />
    </>
  )
}

export default BackwardSubstitution
