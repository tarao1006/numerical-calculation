import React from 'react'
import styled from 'styled-components'

const Scalar = ({ value }) => {

  return (
    <Field>
      { value }
    </Field>
  )
}

export default Scalar

const Field = styled.div`
  text-align: center;
  margin: 0 auto;
`
