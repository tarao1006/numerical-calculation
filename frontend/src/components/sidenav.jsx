import React from 'react'
import styled, { css } from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

const SideNav = () => {

  let { url, path } = useRouteMatch()

  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1)
  }

  if (path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }

  return (
    <>
      <SideNavItem>
        <NavLink to="/">
          ホーム
        </NavLink>
      </SideNavItem>
      <SideNavItem>
        <NavLink to={`${url}`} style={{textDecoration: "none"}}>
          連立一次方程式
        </NavLink>
      </SideNavItem>
      <SideNavItem sub>
        <NavLink to={`${url}/jacobi_method`} style={{textDecoration: "none"}}>
          ヤコビ法
        </NavLink>
      </SideNavItem>
      <SideNavItem sub>
        <NavLink to={`${url}/gauss_seidel_method`} style={{textDecoration: "none"}}>
          ガウス・ザイデル法
        </NavLink>
      </SideNavItem>
      <SideNavItem sub>
        <NavLink to={`${url}/sor_method`} style={{textDecoration: "none"}}>
          SOR法
        </NavLink>
      </SideNavItem>


      <Switch>
        <Route path={ `${path}/jacobi_method` }>
          {/* <JacobMethodLinearEquation /> */}
        </Route>
        <Route path={ `${path}/gauss_seidel_method` }>
          {/* <GaussSeidelMethodLinearEquation /> */}
        </Route>
        <Route path={ `${path}/sor_method` }>
          {/* <SorMethodLinearEquation /> */}
        </Route>
        <Route exact path={ path }>
          {/* <Root url={ url } /> */}
        </Route>
      </Switch>
    </>
  )
}

export default SideNav

const Item = styled.div`
  min-width: 200px;
  padding: 8px 10px 8px 10px;
  color: gray;

  &:hover {
    background-color: rgb(240, 240, 240);
  }

  ${props => props.sub && css`
    padding-left: 25px;
  `}

  ${props => props.current && css`
    background-color: rgb(230, 230, 230);
  `}
`

const SideNavItem = ({ children, sub }) => {

  return (
    <Item sub={ sub }>
      { children }
    </Item>
  )
}
