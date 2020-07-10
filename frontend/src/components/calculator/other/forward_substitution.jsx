import React, { useState } from 'react'
import SubstitutionContainer from '../../substitutioncontainer'
import useJacobiMethodLinearEquation from '../../../actions/jacobiMethodLinearEquationAction'

const ForwardSubstitution = () => {
  const title = "前進代入"
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
      />
    </>
  )
}

export default ForwardSubstitution
