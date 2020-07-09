import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './home'
import LinearEquation from './calculator/linear_equation'
import store from './store'

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
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('app')
)
