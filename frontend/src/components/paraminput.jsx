import React, { useState } from 'react'
import styled from 'styled-components'

const ParamInput = ({ label, defaultValue, handleValue }) => {

  if (!defaultValue) {
    defaultValue = 0
  }
  const [value, setValue] = useState(defaultValue)

  const handleChange = e => {

    const val = e.target.value
    setValue(val)
    handleValue(val)
  }

  return (
    <Container>
      <Label>
        { label }
      </Label>
      <Input
        value={ value }
        onChange={ handleChange }
        type="number"
      />
    </Container>
  )
}

export default ParamInput

const Input = styled.input`
  font-size: 1em;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.label`
  font-size: 20px;
`