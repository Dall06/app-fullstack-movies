import {
  MOVIE_UPDATE_STARTED,
  MOVIE_UPDATE_COMPLETED,
  MOVIE_UPDATE_ERROR,
  MOVIE_UPDATE_RESET,
} from '../constants/MoviesActionTypes';

const initialState = {
  loading: false,
  error: null,
  updated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_UPDATE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_UPDATE_COMPLETED:
      return {
        ...state,
        loading: false,
        updated: true,
      };
    case MOVIE_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case MOVIE_UPDATE_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
