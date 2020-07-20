import React, { useEffect } from 'react'
import styled from 'styled-components'
import MatrixSize from './parts/matrixsize'
import ExecuteButton from './parts/executebutton'
import { siteTitle } from '../common/title'

const MainContainer = ({ children, input, title, execute, output, status, loading, executed, setStatus, setExecuted, handleUpdateClick }) => {

  useEffect(() => {
    document.title = `${title} | ${siteTitle}`
  })

  const calculatingDisplay = (
    <Wrapper fontSize="2">
      計算中...
    </Wrapper>
  )

  const statusDisplay = (
    <StatusWrapper status={ status }>
      { status ? "Succeeded" : "Failed" }
    </StatusWrapper>
  )

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
        { input }

        <Wrapper>
          <ExecuteButton execute={ execute } />
        </Wrapper>

        { loading && calculatingDisplay }
        { executed && statusDisplay}
        { status && output }

      </Container>
    </>
  )
}

export default MainContainer

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

export const MatrixWrapper = styled.div`
  max-width: 700px;
  overflow: hidden;
`

export const VectorWrapper = styled.div`
  max-width: 700px;
`

export const IterWrapper = styled.div`
  max-width: 700px;
`
