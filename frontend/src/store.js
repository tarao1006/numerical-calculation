import { applyMiddleware, combineReducers, createStore } from 'redux'
import jacobiMethodLinearEquation from './reducers/jacobiMethodLinearEquationReducer'

const store = createStore(combineReducers({
  jacobiMethodLinearEquation,
}), applyMiddleware())

export default store
