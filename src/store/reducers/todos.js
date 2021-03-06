import { ADD, MINUS } from '../constants/todos'

const INITIAL_STATE = {
  num: 0
}

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1 
      }
    default: 
      return state
  }
}

export default counter