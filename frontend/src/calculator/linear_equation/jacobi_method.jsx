import React, { useState } from 'react'
import MatrixContainer from '../../components/matrixcontainer'
import Vector from '../../components/matrix/vector'
import useJacobiMethodLinearEquation from '../../actions/jacobiMethodLinearEquationAction'

const JacobMethodLinearEquation = () => {
  const title = "ヤコビ法"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ solutionVector, setSolutionVector ] = useState([])

  const dummyExecute = () => {
    console.log('executed')
  }

  return (
    <MatrixContainer
      title={ title }
      execute={ dummyExecute }
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

export default JacobMethodLinearEquation
