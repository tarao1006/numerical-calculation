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
      <button onClick={ handleUpdateClick } >
        更新
      </button>
      <Label>サイズ</Label>
      <MatrixSize
        setStatus={ setStatus }
        setExecuted={ setExecuted }
      />

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
