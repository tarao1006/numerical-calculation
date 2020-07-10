import { applyMiddleware, combineReducers, createStore } from 'redux'
import jacobiMethodLinearEquation from './reducers/jacobiMethodLinearEquationReducer'
import gaussSeidelMethodLinearEquation from './reducers/gaussSeidelMethodLinearEquationReducer'
import sorMethodLinearEquation from "./reducers/sorMethodLinearEquationReducer"

const store = createStore(combineReducers({
  jacobiMethodLinearEquation,
  sorMethodLinearEquation,
  gaussSeidelMethodLinearEquation
}), applyMiddleware())

export default store
