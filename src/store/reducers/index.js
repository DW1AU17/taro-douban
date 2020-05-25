import { combineReducers } from 'redux'
import todos from './todos'

// 合并多个reducer
export default combineReducers({
  todos
})