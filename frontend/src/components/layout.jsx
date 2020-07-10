import React from 'react'
import styled from 'styled-components'
import SideNav from './sidenav'

const Layout = ({ children }) => {

  return (
    <Container>
      <SideGrid>
        <SideNav />
      </SideGrid>
      <MainGrid>
        { children }
      </MainGrid>
    </Container>
  )
}

export default Layout

const MainGrid = styled.div`
  margin: 0 auto;
  width: 800px;
  grid-column: 2;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px 1fr;
  justify-content: center;
`

const SideGrid = styled.div`
  grid-column: 1;
`
