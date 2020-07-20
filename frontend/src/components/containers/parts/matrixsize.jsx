import React from 'react'
import styled, { css } from 'styled-components'
import useJacobiMethodLinearEquation from '../../../actions/jacobiMethodLinearEquationAction'
import { Container, Label } from './paraminput'

const MatrixSize = ({ setStatus, setExecuted }) => {

  const { size, increment, decrement } = useJacobiMethodLinearEquation()

  const handlePlusClick = () => {
    if (size < 10) {
      increment()
      setStatus(false)
      setExecuted(false)
    }
  }

  const handleMinusClick = () => {
    if (size > 2) {
      decrement()
      setStatus(false)
      setExecuted(false)
    }
  }

  return (
    <Container>
      <Label>サイズ</Label>
      <Size>{ size }</Size>
      <PlusButton onClick={ handlePlusClick } disabled={ size >= 10 } />
      <MinusButton onClick={ handleMinusClick } disabled={ size <= 2} />
    </Container>
  )
}

export default MatrixSize

const Size = styled.span`
  min-width: 1.5em;
  text-align: right;
  font-size: 20px;
  padding: 0 10px;
`

const Button = styled.span`
  position: relative;
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  border-radius: 20%;
  cursor: pointer;
  outline: none;
  appearance: none;
  margin: 0 0.2em;
  vertical-align: middle;

  ${props => props.disabled && css`
    cursor: default;
    opacity: 0.4;
  `}
`

const MinusButton = styled(Button)`
  background: #4169E1;

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
  background: #B22222;

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
