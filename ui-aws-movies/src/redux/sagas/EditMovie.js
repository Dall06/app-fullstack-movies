import { put, call, takeLatest } from 'redux-saga/effects';
import {
  MOVIE_UPDATE_COMPLETED,
  MOVIE_UPDATE_STARTED,
  MOVIE_UPDATE_ERROR,
} from '../constants/MoviesActionTypes';
import MovieApiCall from '../../api/movies';

function* UpdateMovie(action) {
  const movie = action.payload;
  const { id } = movie;
  if (movie) {
    delete movie.id;
  }
  try {
    const result = yield call(MovieApiCall, 'PUT', `/${id}`, movie);

    yield put({
      type: MOVIE_UPDATE_COMPLETED,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_UPDATE_ERROR,
    });
  }
}

export default function* () {
  yield takeLatest(MOVIE_UPDATE_STARTED, UpdateMovie);
}
