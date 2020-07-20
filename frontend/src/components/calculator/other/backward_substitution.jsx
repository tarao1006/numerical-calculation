import React, { useState } from 'react'
import axios from 'axios'
import SubstitutionContainer from '../../containers/other/substitutioncontainer'
import Vector from '../../matrix/vector'
import useForwardSubstitution from '../../../actions/other/backward_substitution'

const BackwardSubstitution = () => {
  const title = "後退代入"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])
  const { size, coefficientMatrix, rightHandSideVector } = useForwardSubstitution()

  const execute = async () => {
    setExecuted(false)
    setStatus(false)
    setLoading(true)
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/other/backward_substitution`, {
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
        useLinearEquation={ useForwardSubstitution }
        forward={ false }
      />
    </>
  )
}

export default BackwardSubstitution
