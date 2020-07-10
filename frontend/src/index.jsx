import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './home'
import LinearEquation from './components/calculator/linear_equation'
import Other from './components/calculator/other'
import store from './store'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/linear_equation" component={ LinearEquation } />
        <Route path="/other" component={ Other } />
      </Switch>
    </Router>
  );
}

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('app')
)
