import { combineReducers, createStore } from 'redux'
import { demoReducer } from './demo/reducer'
import { IDemoState } from './demo/types'
export interface IRootState {
  demo: IDemoState
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer
  })
)
// store.subscribe(() => console.log(store.getState()))
export default store
