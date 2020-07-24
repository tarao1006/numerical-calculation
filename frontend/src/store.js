import { applyMiddleware, combineReducers, createStore } from 'redux'
import jacobiMethodLinearEquation from './reducers/jacobiMethodLinearEquationReducer'
import gaussSeidelMethodLinearEquation from './reducers/gaussSeidelMethodLinearEquationReducer'
import sorMethodLinearEquation from "./reducers/sorMethodLinearEquationReducer"
import forwardSubstitution from './reducers/forwardSubstitutionReducer'
import backwardSubstitution from './reducers/backwardSubstitutionReducer'
import linearEquation from "./reducers/linearEquation"

const store = createStore(combineReducers({
  jacobiMethodLinearEquation,
  sorMethodLinearEquation,
  gaussSeidelMethodLinearEquation,
  forwardSubstitution,
  backwardSubstitution,
  linearEquation
}), applyMiddleware())

export default store
