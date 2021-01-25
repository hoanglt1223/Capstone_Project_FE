import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { demoReducer } from './demo/reducer'
import { IDemoState } from './demo/types'
import mySaga from './sagas'
export interface IRootState {
  demo: IDemoState
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer
  }),
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(mySaga)

store.subscribe(() => console.log(store.getState()))

export default store
