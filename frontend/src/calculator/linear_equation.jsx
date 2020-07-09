import React from 'react'
import styled, { css } from 'styled-components'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import GaussSeidelMethodLinearEquation from './linear_equation/gauss_seidel_method'
import JacobMethodLinearEquation from './linear_equation/jacobi_method'
import SorMethodLinearEquation from './linear_equation/sor_method'
import Layout from '../components/layout'

const LinearEquation = () => {

  let { url, path } = useRouteMatch()
  return (
    <Layout>
      <Switch>
        <Route path={ `${path}/jacobi_method` }>
          <JacobMethodLinearEquation />
        </Route>
        <Route path={ `${path}/gauss_seidel_method` }>
          <GaussSeidelMethodLinearEquation />
        </Route>
        <Route path={ `${path}/sor_method` }>
          <SorMethodLinearEquation />
        </Route>
        <Route exact path={ path }>
          <Root url={ url } />
        </Route>
      </Switch>
    </Layout>
  )
}

const Root = ({ url }) => {

  return (
    <>
      <Card>
        <Link to={ `${url}/jacobi_method` }>
          <Method>
            ヤコビ法
          </Method>
        </Link>
      </Card>
      <Card>
        <Link to={ `${url}/gauss_seidel_method` }>
          <Method>
            ガウス・ザイデル法
          </Method>
        </Link>
      </Card>
      <Card>
        <Link to={ `${url}/sor_method` }>
          <Method>
            SOR法
          </Method>
        </Link>
      </Card>
    </>
  )
}

export default LinearEquation

const Card = styled.div`
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;
  background: white;

  ${props => props.unimplemented && css`
    opacity: 0.4;
  `}

  ${props => !props.unimplemented && css`
    &:hover {
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 3px 16px 0px rgba(0, 0, 0, 0.06);
      transform: translateY(-3px);
    }
  `}
`

const Method = styled.span`
  margin: 0 auto;
  width: 100%;
  display: block;
  text-decoration: none;
  cursor: ${props => props.unimplemented ? "default" : "pointer"};
  ${props => props.unimplemented && css`
    pointer-events: none;
  `}
`
