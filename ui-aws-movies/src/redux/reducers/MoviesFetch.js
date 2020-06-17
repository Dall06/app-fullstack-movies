import {
  MOVIE_FETCH_COMPLETED,
  MOVIE_FETCH_STARTED,
  MOVIE_FETCH_RESET,
  MOVIE_FETCH_ERROR,
} from '../constants/MoviesActionTypes';

const initialState = {
  loading: false,
  results: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_FETCH_COMPLETED:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case MOVIE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOVIE_FETCH_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
