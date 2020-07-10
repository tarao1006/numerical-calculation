import React from 'react'
import styled from 'styled-components'
import useJacobiMethodLinearEquation from '../actions/jacobiMethodLinearEquationAction'
import { Container, Label } from './paraminput'

const MatrixSize = ({ setStatus, setExecuted }) => {

  const { size, increment, decrement } = useJacobiMethodLinearEquation()

  const handlePlusClick = () => {
    increment()
    setStatus(false)
    setExecuted(false)
  }

  const handleMinusClick = () => {
    decrement()
    setStatus(false)
    setExecuted(false)
  }

  return (
    <Container>
      <Label>サイズ</Label>
      <Size>{ size }</Size>
      <PlusButton onClick={ handlePlusClick } />
      <MinusButton onClick={ handleMinusClick } />
    </Container>
  )
}

export default MatrixSize

const Size = styled.span`
  font-size: 20px;
  padding: 0 10px;
`

const Button = styled.span`
  position: relative;
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  appearance: none;
  margin: 0 0.2em;
  vertical-align: middle;
`

const MinusButton = styled(Button)`
  background: blue;

  &::before {
    position: absolute;
    top: 0.675em;
    left: 50%;
    content: "";
    display: inline-block;
    width: 1.2em;
    border-top: solid 0.25em white;
    transform: translateX(-50%);
  }
`

const PlusButton = styled(MinusButton)`
  background: red;

  &::after {
    position: absolute;
    top: 50%;
    left: 0.675em;
    content: "";
    display: inline-block;
    height: 1.2em;
    border-left: solid 0.25em white;
    transform: translateY(-50%);
  }
`
