import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {

  return (
    <Main>
      { children }
    </Main>
  )
}

export default Layout

const Main = styled.div`
  margin: 0 auto;
  width: 800px;
`
