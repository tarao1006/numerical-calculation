import React from 'react'
import UpperTriangularMatrix from '../../matrix/upper_triangular_matrix'
import LowerTriangularMatrix from '../../matrix/lower_triangular_matrix'
import Vector from '../../matrix/vector'
import { updateLowerTriangularMatrix, updateUpperTriangularMatrix } from '../../../lib/other'
import { Label } from '../parts/paraminput'
import MainContainer, { MatrixWrapper, VectorWrapper } from '../maincontainer'

const SubstitutionContainer = ({ children, title, execute, result, status, loading, executed, setStatus, setExecuted, useLinearEquation, forward }) => {

  const { size, coefficientMatrix, rightHandSideVector, update, id } = useLinearEquation()

  const handleUpdateClick = () => {
    const [s, mat, vec] = forward ? updateLowerTriangularMatrix(size) : updateUpperTriangularMatrix(size)
    update(s, mat, vec)
    setStatus(false)
    setExecuted(false)
  }

  const matrix = forward ?
    <LowerTriangularMatrix
      rowCount={ size }
      columnCount={ size }
      values={ coefficientMatrix }
      id={ id }/> :
    <UpperTriangularMatrix
      rowCount={ size }
      columnCount={ size }
      values={ coefficientMatrix }
      id={ id }/>

  const input = (
    <>
      <MatrixWrapper>
        <Label>係数行列</Label>
        { matrix }
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

export default SubstitutionContainer
