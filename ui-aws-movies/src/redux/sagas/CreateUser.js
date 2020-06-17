import { put, call, takeLatest } from 'redux-saga/effects';
import {
  USER_CREATE_COMPLETED,
  USER_CREATE_STARTED,
  USER_CREATE_ERROR,
} from '../constants/UsersActionTypes';
import UserApiCall from '../../api/users';

function* AddUser(action) {
  const user = action.payload;

  try {
    const result = yield call(UserApiCall, 'POST', '/', user);

    yield put({
      type: USER_CREATE_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: USER_CREATE_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(USER_CREATE_STARTED, AddUser);
}
