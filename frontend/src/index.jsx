import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home'
import LinearEquation from './calculator/linear_equation'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/linear_equation" >
         <LinearEquation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDom.render(
  <App />, document.getElementById('app')
)
