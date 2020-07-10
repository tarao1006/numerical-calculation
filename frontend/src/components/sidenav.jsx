import React from 'react'
import styled, { css } from 'styled-components'
import { useRouteMatch, useLocation } from "react-router-dom";
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
      <SideNavItem to="/">
          ホーム
      </SideNavItem>
      <SideNavItem to={`${url}`}>
          連立一次方程式
      </SideNavItem>
      <SideNavItem sub to={`${url}/jacobi_method`}>
          ヤコビ法
      </SideNavItem>
      <SideNavItem sub to={`${url}/gauss_seidel_method`}>
          ガウス・ザイデル法
      </SideNavItem>
      <SideNavItem sub to={`${url}/sor_method`}>
          SOR法
      </SideNavItem>
    </>
  )
}

export default SideNav

const Item = styled.div`
  min-width: 200px;
  color: gray;

  &:hover {
    background-color: rgb(240, 240, 240);
  }

  ${props => props.current && css`
    background-color: rgb(230, 230, 230);
  `}
`

const SideNavItem = ({ children, to, sub }) => {
  const currentPath = useLocation().pathname

  return (
    <Item current={ to === currentPath } >
      <Link to={ to }>
        <Name sub={ sub }>
          { children }
        </Name>
      </Link>
    </Item>
  )
}

const Name = styled.span`
  margin: 0 auto;
  width: 100%;
  display: block;
  padding: 8px 10px 8px 10px;

  ${props => props.sub && css`
    padding-left: 25px;
  `}

  cursor: "pointer";
`
