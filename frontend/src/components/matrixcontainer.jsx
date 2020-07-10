import React, { useEffect } from 'react'
import styled from 'styled-components'
import Matrix from './matrix/matrix'
import Vector from './matrix/vector'
import MatrixSize from './matrixsize'
import ExecuteButton from './executebutton'
import { siteTitle } from './title'
import useJacobiMethodLinearEquation from '../actions/jacobiMethodLinearEquationAction'
import { updateValues } from '../reducers/jacobiMethodLinearEquationReducer'

const MatrixContainer = ({ title, execute, result, status, executed, setStatus, setExecuted }) => {

  useEffect(() => {
    document.title = `${title} | ${siteTitle}`
  })

  const { size, coefficientMatrix, rightHandSideVector, update } = useJacobiMethodLinearEquation()

  const handleUpdateClick = () => {
    const [s, mat, vec] = updateValues(size)
    update(s, mat, vec)
    setStatus(false)
    setExecuted(false)
  }

  const message = (
    <StatusWrapper status={ status }>
      { status ? "Succeeded" : "Failed" }
    </StatusWrapper>
  )

  const output = status ? (
    <VectorWrapper>
      <Label>解ベクトル</Label>
      { result }
    </VectorWrapper>
  ) : (<></>)

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

      <Container>
        <MatrixWrapper>
          <Label>係数行列</Label>
          <Matrix
            rowCount={ size }
            columnCount={ size }
            values={ coefficientMatrix }
          />
        </MatrixWrapper>
        <VectorWrapper>
          <Label>右辺ベクトル</Label>
          <Vector
            size={ size }
            values={ rightHandSideVector }
          />
        </VectorWrapper>

        <ButtonWrapper>
          <ExecuteButton execute={ execute } />
        </ButtonWrapper>

        { executed && message }
        { output }

      </Container>
    </>
  )
}

export default MatrixContainer

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

const Label = styled.label`
  font-size: 20px;
`

const MatrixWrapper = styled.div`
  max-width: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  overflow: scroll;
  border-radius: 12px;
`

const VectorWrapper = styled.div`
  max-width: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-radius: 12px;
`

const ButtonWrapper = styled.div`
  margin: 0 auto;
`

const StatusWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 100px;
  border-radius: 10px;
  color: white;
  background: ${props => props.status ? "#5cb85c" : "#d9534f"};
`
