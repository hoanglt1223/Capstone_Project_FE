import { call, put, takeLatest } from 'redux-saga/effects'
import { login } from '../API/authenticate'
import { IUser } from '../interfaces/user'
import { Constants } from './demo/constants'

// worker Saga: will be fired on LOGIN_REQUESTED actions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* loginSaga(action: any) {
  console.log('Log ~ file: sagas.ts ~ line 9 ~ function*loginSaga ~ action', action)
  try {
    const user = yield call(login, action.payload.item)
    yield put({ type: 'LOGIN_SUCCEEDED', user: user })
  } catch (e) {
    yield put({ type: 'LOGIN_FAILED', message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `LOGIN_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery('LOGIN_REQUESTED', loginSaga)
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "LOGIN_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(Constants.LOGIN, loginSaga)
}

export default mySaga
