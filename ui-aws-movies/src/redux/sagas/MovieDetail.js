import { put, call, takeLatest } from 'redux-saga/effects';
import {
  MOVIE_GET_BY_ID_COMPLETED,
  MOVIE_GET_BY_ID_STARTED,
  MOVIE_GET_BY_ID_ERROR,
} from '../constants/MoviesActionTypes';
import MovieApiCall from '../../api/movies';

function* GetMovieById(action) {
  const id = action.payload;
  try {
    const result = yield call(MovieApiCall, 'GET', `/${id}`, null);
    if (result.data.Error) {
      throw new Error(result.data.Error);
    }
    yield put({
      type: MOVIE_GET_BY_ID_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_GET_BY_ID_ERROR,
      payload: e,
    });
  }
}

export default function* () {
  yield takeLatest(MOVIE_GET_BY_ID_STARTED, GetMovieById);
}
