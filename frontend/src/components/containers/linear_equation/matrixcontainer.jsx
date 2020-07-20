import React from 'react'
import MainContainer, { MatrixWrapper, VectorWrapper, IterWrapper } from '../maincontainer'
import { Label } from '../parts/paraminput'
import Matrix from '../../matrix/matrix'
import Vector from '../../matrix/vector'
import Scalar from '../../matrix/scalar'
import { updateValues } from '../../../lib/linearequation'

const MatrixContainer = ({ children, title, execute, result, iter, status, loading, executed, setStatus, setExecuted, useLinearEquation }) => {

  const { size, coefficientMatrix, rightHandSideVector, update, id } = useLinearEquation()

  const handleUpdateClick = () => {
    const [s, mat, vec] = updateValues(size)
    update(s, mat, vec)
    setStatus(false)
    setExecuted(false)
  }

  const input = (
    <>
      <MatrixWrapper>
      <Label>係数行列</Label>
      <Matrix
        rowCount={ size }
        columnCount={ size }
        values={ coefficientMatrix }
        id={ id }
      />
      </MatrixWrapper>
      <VectorWrapper>
        <Label>右辺ベクトル</Label>
        <Vector
          size={ size }
          values={ rightHandSideVector }
          id={ id }
        />
      </VectorWrapper>
    </>
  )

  const output = (
    <>
      <IterWrapper>
        <Label>試行回数</Label>
        <Scalar
          value={ iter }
          readOnly
        />
      </IterWrapper>
      <VectorWrapper>
        <Label>解ベクトル</Label>
        { result }
      </VectorWrapper>
    </>
  )

  return (
    <MainContainer
      title={ title }
      execute={ execute }
      input={ input }
      output={ output } 
      iter={ iter }
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

export default MatrixContainer
