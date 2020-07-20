import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import GaussSeidelMethodLinearEquation from '../linear_equation/gauss_seidel_method'
import JacobMethodLinearEquation from '../linear_equation/jacobi_method'
import SorMethodLinearEquation from '../linear_equation/sor_method'
import Layout from '../../common/layout'
import { siteTitle } from '../../common/title'
import Card, { Main } from './card'

export const LinearEquation = () => {

  const { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
      <Route exact path={ path }>
          <Root />
        </Route>
        <Route path={ `${path}/jacobi_method` }>
          <JacobMethodLinearEquation />
        </Route>
        <Route path={ `${path}/gauss_seidel_method` }>
          <GaussSeidelMethodLinearEquation />
        </Route>
        <Route path={ `${path}/sor_method` }>
          <SorMethodLinearEquation />
        </Route>
      </Switch>
    </Layout>
  )
}

const Root = () => {

  const { url } = useRouteMatch()

  useEffect(() => {
    document.title = `連立一次方程式 | ${siteTitle}`
  })

  return (
    <Main>
      <Card to={ `${url}/jacobi_method` }>
        ヤコビ法
      </Card>
      <Card to={ `${url}/gauss_seidel_method` }>
        ガウス・ザイデル法
      </Card>
      <Card to={ `${url}/sor_method` }>
          SOR法
      </Card>
    </Main>
  )
}
