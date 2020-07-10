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

export default Other

const Root = () => {

  const { url } = useRouteMatch()

  useEffect(() => {
    document.title = `その他 | ${siteTitle}`
  })

  return (
    <>root</>
  )
}
