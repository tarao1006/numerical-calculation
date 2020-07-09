import React from 'react'
import styled from 'styled-components'
import useJacobiMethodLinearEquation from '../actions/jacobiMethodLinearEquationAction'

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
    <>
      <Size>{ size }</Size>
      <button onClick={ handlePlusClick }>+</button>
      <button onClick={ handleMinusClick }>-</button>
    </>
  )
}

export default MatrixSize

const Size = styled.span`
  font-size: 20px;
  padding: 0 10px;
`
