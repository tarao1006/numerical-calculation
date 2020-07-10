import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import ForwardSubstitution from './other/forward_substitution'
import BackwardSubstitution from './other/backward_substitution'
import LuDecomposition from './other/lu_decomposition'
import Layout from '../layout'
import { siteTitle } from '../title';
import Card, { Main } from './card'

const Other = () => {

  const { path} = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={ path }>
          <Root />
        </Route>
        <Route path={ `${path}/forward_substitution` }>
          <ForwardSubstitution />
        </Route>
        <Route path={ `${path}/backward_substitution` }>
          <BackwardSubstitution />
        </Route>
        <Route path={ `${path}/lu_decomposition` }>
          <LuDecomposition />
        </Route>
      </Switch>
    </Layout>
  )
}

const Root = () => {

  const { url } = useRouteMatch()

  useEffect(() => {
    document.title = `その他 | ${siteTitle}`
  })

  return (
    <Main>
      <Card to={ `${url}/forward_substitution` }>
        前方代入
      </Card>
      <Card to={ `${url}/backward_substitution` }>
        後退代入
      </Card>
      <Card to={ `${url}/lu_decomposition` }>
        LU分解
      </Card>
    </Main>
  )
}

export default Other
