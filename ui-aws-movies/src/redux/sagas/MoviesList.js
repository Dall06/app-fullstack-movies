import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MOVIE_FETCH_COMPLETED,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_STARTED,
} from '../constants/MoviesActionTypes';
import MovieApiCall from '../../api/movies';

function* FetchPosts() {
  try {
    const result = yield call(MovieApiCall, 'GET', '');

    yield put({
      type: MOVIE_FETCH_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_FETCH_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(MOVIE_FETCH_STARTED, FetchPosts);
}
