import React, { useState } from 'react'
import axios from 'axios'
import DecompositionContainer from '../../decompositioncontainer'
import useForwardSubstitution from '../../../actions/other/forward_substitution'
import Matrix from '../../matrix/matrix'

const LuDecomposition = () => {
  const title = "LU分解"
  const [ status, setStatus ] = useState(false)
  const [ executed, setExecuted ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ matL, setMatL ] = useState([])
  const [ matU, setMatU ] = useState([])
  const [ matP, setMatP ] = useState([])
  const { size, coefficientMatrix } = useForwardSubstitution()

  const execute = async () => {
    setExecuted(false)
    setStatus(false)
    setLoading(true)
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/other/lu_decomposition', {
          "size": size,
          "matrix": coefficientMatrix
        })

        setStatus(result.data.status === 'SUCCESS')
        setMatL(result.data.matrixL)
        setMatU(result.data.matrixU)
        setMatP(result.data.matrixP)
        setExecuted(true)
      } catch (error) {
        setStatus(false)
    }
    setLoading(false)
  }

  return (
    <>
      <DecompositionContainer
        title={ title }
        execute={ execute }
        status={ status }
        executed={ executed }
        loading={ loading }
        result={
          executed &&
          {
            mat_l: <Matrix
              rowCount={ matL.length }
              columnCount={ matL.length }
              values={ matL }
              readOnly={ true }
            />,
            mat_u: <Matrix
              rowCount={ matU.length }
              columnCount={ matU.length }
              values={ matU }
              readOnly={ true }
            />,
            mat_p: <Matrix
              rowCount={ matP.length }
              columnCount={ matP.length }
              values={ matP }
              readOnly={ true }
            />
          }
        }
        setStatus={ setStatus }
        setExecuted={ setExecuted }
        useLinearEquation={ useForwardSubstitution }
      />
    </>
  )
}

export default LuDecomposition
