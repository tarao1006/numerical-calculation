import React from 'react'
import styled, { css } from 'styled-components'
import { useRouteMatch } from "react-router-dom";
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
        <Link to="/">
          ホーム
        </Link>
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
