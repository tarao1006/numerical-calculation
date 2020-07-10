import React from 'react'
import styled, { css } from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import Link from './linkcomposition'

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
        <Link to={`${url}`}>
          連立一次方程式
        </Link>
      </SideNavItem>
      <SideNavItem sub>
        <Link to={`${url}/jacobi_method`}>
          ヤコビ法
        </Link>
      </SideNavItem>
      <SideNavItem sub>
        <Link to={`${url}/gauss_seidel_method`}>
          ガウス・ザイデル法
        </Link>
      </SideNavItem>
      <SideNavItem sub>
        <Link to={`${url}/sor_method`}>
          SOR法
        </Link>
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
