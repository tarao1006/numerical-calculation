import React from 'react'
import Matrix from '../../matrix/matrix'
import { updateMatrix } from '../../../lib/other'
import { Label } from '../parts/paraminput'
import MainContainer, { MatrixWrapper } from '../maincontainer'

const DecompositionContainer = ({ children, title, execute, result, status, loading, executed, setStatus, setExecuted, useLinearEquation }) => {

  const { size, coefficientMatrix, update, id } = useLinearEquation()

  const handleUpdateClick = () => {
    const [s, mat, vec] = updateMatrix(size)
    update(s, mat, vec)
    setStatus(false)
    setExecuted(false)
  }

  const input = (
    <>
      <MatrixWrapper>
      <Label>行列</Label>
      <Matrix
        rowCount={ size }
        columnCount={ size }
        values={ coefficientMatrix }
        id={ id }
      />
      </MatrixWrapper>
    </>
  )

  const output = (
    <>
      <MatrixWrapper>
      <Label>L行列</Label>
        { result.mat_l }
      </MatrixWrapper>
      <MatrixWrapper>
      <Label>U行列</Label>
        { result.mat_u }
      </MatrixWrapper>
      <MatrixWrapper>
      <Label>P行列</Label>
        { result.mat_p }
      </MatrixWrapper>
    </>
  )

  return (
    <MainContainer
      title={ title }
      execute={ execute }
      input={ input }
      output={ output } 
      status={ status }
      loading={ loading }
      executed={ executed }
      setStatus={ setStatus }
      setExecuted={ setExecuted }
      handleUpdateClick={ handleUpdateClick }>
      { children }
    </MainContainer>
  )
}

export default DecompositionContainer
