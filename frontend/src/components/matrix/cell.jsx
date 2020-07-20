import React from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'

const Cell = ({ x, y, val, onValueChange, readOnly, black }) => {

  const [value, setValue] = useState(val)

  const handleChange = e => {
    let _value = parseFloat(e.target.value)
    _value = Number.isNaN(_value) ? "" : _value
    if (onValueChange) onValueChange(x, y, _value)
    setValue(_value)
  }

  return (
    readOnly?
    <FixedInput black={ black }>{ val }</FixedInput> :
    <Input type='number' value={ value } onChange={ handleChange } />
  )
}

export default Cell

const Input = styled.input`
  text-align: center;
  width: 55px;
  height: 25px;
  border: solid 1px gray;
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type=number] {
    -moz-appearance: textfield;
  }
`

const FixedInput = styled.div`
  text-align: center;
  width: 55px;
  height: 25px;
  border: solid 1px gray;
  color: black;
  padding: 1px 2px;
  font-size: 400 13.333px Arial;
  overflow-x: hidden;

  ${props => props.black && css`
    background: black;
  `}
`
