import { put, call, takeLatest } from 'redux-saga/effects';
import {
  MOVIE_CREATE_COMPLETED,
  MOVIE_CREATE_STARTED,
  MOVIE_CREATE_ERROR,
} from '../constants/MoviesActionTypes';
import MovieApiCall from '../../api/movies';

function* AddMovie(action) {
  const movie = action.payload;

  try {
    const result = yield call(MovieApiCall, 'POST', '', movie);

    yield put({
      type: MOVIE_CREATE_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_CREATE_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(MOVIE_CREATE_STARTED, AddMovie);
}
