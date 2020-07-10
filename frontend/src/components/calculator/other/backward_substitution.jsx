import React, { useState } from 'react'
import SubstitutionContainer from '../../substitutioncontainer'
import useJacobiMethodLinearEquation from '../../../actions/jacobiMethodLinearEquationAction'

const BackwardSubstitution = () => {
  const title = "後退代入"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)

  const execute = () => {
    console.log('executed')
  }

  return (
    <>
      <SubstitutionContainer
        title={ title }
        execute={ execute }
        status={ status }
        executed={ executed }
        setStatus={ setStatus }
        setExecuted={ setExecuted }
        useLinearEquation={ useJacobiMethodLinearEquation }
        forward={ false }
      />
    </>
  )
}

export default BackwardSubstitution
