import { login } from '../../API/authenticate'
import { Constants } from './constants'
import { IDemoState } from './types'
const init: IDemoState = {
  list: [],
  loading: false,
  user: {}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function demoReducer(state: IDemoState = init, action: any): IDemoState {
  console.log('TCL ~ file: reducer.ts ~ line 9 ~ demoReducer ~ action', action)
  switch (action.type) {
    case Constants.ADD_ITEM:
      return { ...state, list: [...state.list, action.payload.item] }
    case Constants.SET_LOADING:
      return { ...state, ...action.payload }
    // case Constants.LOGIN:
    //   login(action.payload.item)
    //   return { ...state, user: action.payload }
    default:
      return state
  }
}
