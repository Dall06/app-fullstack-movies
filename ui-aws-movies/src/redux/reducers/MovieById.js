import {
  MOVIE_GET_BY_ID_COMPLETED,
  MOVIE_GET_BY_ID_STARTED,
  MOVIE_GET_BY_ID_RESET,
  MOVIE_GET_BY_ID_ERROR,
} from '../constants/MoviesActionTypes';

const initialState = {
  loading: false,
  results: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_GET_BY_ID_STARTED:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_GET_BY_ID_COMPLETED:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case MOVIE_GET_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOVIE_GET_BY_ID_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
