import { combineReducers, createStore, applyMiddleware } from 'redux'
import { demoReducer } from './demo/reducer'
import { IDemoState } from './demo/types'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import mySaga from './saga'
export interface IRootState {
  demo: IDemoState
}
const sagaMiddleware = createSagaMiddleware()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer
  }),
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(mySaga)
store.subscribe(() => console.log(store.getState()))
export default store
