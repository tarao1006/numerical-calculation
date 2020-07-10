import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Layout from '../layout'


const Other = () => {

  const { url, path} = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={ path }>
          <Root url={ url } />
        </Route>
        <Route path={ `${path}/forward_substitution` }>
          <>前進代入</>
        </Route>
        <Route path={ `${path}/backward_substitution` }>
          <>後退代入</>
        </Route>
        <Route path={ `${path}/lu_decomposition` }>
          <>LU分解</>
        </Route>
      </Switch>
    </Layout>
  )
}

export default Other

const Root = ({ url }) => {

  return (
    <>root</>
  )
}
