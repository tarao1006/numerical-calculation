import React from 'react'
import styled from 'styled-components'

const ParamInput = ({ label }) => {

  return (
    <Container>
      <Label>
        { label }
      </Label>
      <Input>
      </Input>
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