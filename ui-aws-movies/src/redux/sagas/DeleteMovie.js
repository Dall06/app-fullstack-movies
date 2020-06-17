import { put, call, takeLatest } from 'redux-saga/effects';
import {
  MOVIE_DELETE_COMPLETED,
  MOVIE_DELETE_STARTED,
  MOVIE_DELETE_ERROR,
} from '../constants/MoviesActionTypes';
import MovieApiCall from '../../api/movies';

function* DeleteMovie(action) {
  try {
    const result = yield call(
      MovieApiCall,
      'DELETE',
      `/${action.payload}`,
      null
    );

    yield put({
      type: MOVIE_DELETE_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_DELETE_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(MOVIE_DELETE_STARTED, DeleteMovie);
}
