import { ADD, MINUS } from '../constants/todos'

export const add = () => ({ type: ADD })

export const minus = () => ({ type: MINUS })

export const asyncAdd = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}