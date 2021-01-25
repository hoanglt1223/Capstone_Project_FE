import { AnyAction } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { login } from '../API/authenticate'
import { IUser } from '../interfaces/user'
import { Constants } from './demo/constants'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginSaga(action: any) {
  try {
    const user = yield call(login, action.payload.item)
    yield put({ type: Constants.LOGIN, user: user })
  } catch (e) {
    yield put({ type: Constants.USER_LOGIN_FAILED, message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(Constants.LOGIN, loginSaga)
}

export default mySaga
