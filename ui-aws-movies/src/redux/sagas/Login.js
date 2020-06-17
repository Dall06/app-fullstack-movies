import { put, call, takeLatest } from 'redux-saga/effects';
import {
  AUTHENTICATION_COMPLETED,
  AUTHENTICATION_STARTED,
  AUTHENTICATION_ERROR,
} from '../constants/UsersActionTypes';
import UserApiCall from '../../api/users';

function* AddUser(action) {
  const user = action.payload;

  try {
    const result = yield call(UserApiCall, 'POST', 'login', user);

    yield put({
      type: AUTHENTICATION_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: AUTHENTICATION_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(AUTHENTICATION_STARTED, AddUser);
}
