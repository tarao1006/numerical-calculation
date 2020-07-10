import React, { useEffect } from 'react'
import styled from 'styled-components'
import UpperTriangularMatrix from './matrix/upper_triangular_matrix'
import LowerTriangularMatrix from './matrix/lower_triangular_matrix'
import Vector from './matrix/vector'
import MatrixSize from './matrixsize'
import ExecuteButton from './executebutton'
import { siteTitle } from './title'
import { updateValues } from '../lib/linearequation'
import { Label } from './paraminput'

const SubstitutionContainer = ({ children, title, execute, result, status, loading, executed, setStatus, setExecuted, useLinearEquation, forward }) => {

  useEffect(() => {
    document.title = `${title} | ${siteTitle}`
  })

  const { size, coefficientMatrix, rightHandSideVector, update, id } = useLinearEquation()

  const handleUpdateClick = () => {
    const [s, mat, vec] = updateValues(size)
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

  return (
    <>
      <Title>
        { title }
      </Title>

      <HeadContainer>
        <MatrixSize setStatus={ setStatus } setExecuted={ setExecuted } />
        <GenerateButton onClick={ handleUpdateClick } >
          生成
        </GenerateButton>
      </HeadContainer>

      { children }

      <Container>
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

        <Wrapper>
          <ExecuteButton execute={ execute } />
        </Wrapper>

        { loading &&
          (<Wrapper fontSize="2">
            計算中...
          </Wrapper>)}
        { executed &&
          (<StatusWrapper status={ status }>
            { status ? "Succeeded" : "Failed" }
          </StatusWrapper>)}
        { status &&
          (<>
            <VectorWrapper>
            <Label>解ベクトル</Label>
              { result }
            </VectorWrapper>
          </>)}

      </Container>
    </>
  )
}

export default SubstitutionContainer

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeadContainer = styled.div`
  display: flex;
`

const GenerateButton = styled.button`
  width: 100px;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.4em 1em;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;
  background: white;
  cursor: pointer;
  outline: none;
  appearance: none;

   &:hover {
    background: lightgray;
  }
`

const MatrixWrapper = styled.div`
  max-width: 700px;
  overflow: scroll;
`

const VectorWrapper = styled.div`
  max-width: 700px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  font-size: ${props => `${props.fontSize}em`}
`

const StatusWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 100px;
  border-radius: 10px;
  color: white;
  background: ${props => props.status ? "#5cb85c" : "#d9534f"};
`
