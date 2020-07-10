import { applyMiddleware, combineReducers, createStore } from 'redux'
import jacobiMethodLinearEquation from './reducers/jacobiMethodLinearEquationReducer'
import sorMethodLinearEquation from "./reducers/sorMethodLinearEquationReducer"

const store = createStore(combineReducers({
  jacobiMethodLinearEquation,
  sorMethodLinearEquation
}), applyMiddleware())

export default store
