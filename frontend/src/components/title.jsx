import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {

  return (
    <H1>
      { title }
    </H1>
  )
}

export default Title

const H1 = styled.h1`
  text-align: center;
`
