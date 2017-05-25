import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter
})

export default todoApp;