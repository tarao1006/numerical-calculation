import React from 'react'
import styled, { css } from 'styled-components'
import { useLocation } from "react-router-dom";
import Link from '../common/linkcomposition'

const SideNav = () => {

  return (
    <>
      <SideNavItem to="/">
          ホーム
      </SideNavItem>
      <SideNavItem to="/linear_equation">
          連立一次方程式
      </SideNavItem>
      <SideNavItem sub to="/linear_equation/jacobi_method">
          ヤコビ法
      </SideNavItem>
      <SideNavItem sub to="/linear_equation/gauss_seidel_method">
          ガウス・ザイデル法
      </SideNavItem>
      <SideNavItem sub to="/linear_equation/sor_method">
          SOR法
      </SideNavItem>
      <SideNavItem to="/other">
        その他
      </SideNavItem>
      <SideNavItem sub to="/other/forward_substitution" >
        前進代入
      </SideNavItem>
      <SideNavItem sub to="/other/backward_substitution" >
        後退代入
      </SideNavItem>
      <SideNavItem sub to="/other/lu_decomposition" >
        LU分解
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
