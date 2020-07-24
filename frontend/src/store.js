import { applyMiddleware, combineReducers, createStore } from 'redux'
import sorMethodLinearEquation from "./reducers/sorMethodLinearEquationReducer"
import forwardSubstitution from './reducers/forwardSubstitutionReducer'
import backwardSubstitution from './reducers/backwardSubstitutionReducer'
import linearEquation from "./reducers/linearEquation"

const store = createStore(combineReducers({
  sorMethodLinearEquation,
  forwardSubstitution,
  backwardSubstitution,
  linearEquation
}), applyMiddleware())

export default store
