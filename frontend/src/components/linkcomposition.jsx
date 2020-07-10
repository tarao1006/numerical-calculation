import React from 'react'
import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'

const Link = ({ children, to }) => {

  return (
    <DefaultLink to={ to } component={ FancyLink }>
      { children }
    </DefaultLink>
  )
}

export default Link

const FancyLink = styled.a`
  text-decoration: none;
`