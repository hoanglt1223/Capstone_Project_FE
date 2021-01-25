import { combineReducers, createStore, applyMiddleware } from 'redux'
import { demoReducer } from './demo/reducer'
import { IDemoState } from './demo/types'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
export interface IRootState {
  demo: IDemoState
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(() => console.log(store.getState()))
export default store
