import {
  MOVIE_CREATE_STARTED,
  MOVIE_CREATE_COMPLETED,
  MOVIE_CREATE_ERROR,
  MOVIE_CREATE_RESET,
} from '../constants/MoviesActionTypes';

const initialState = {
  loading: false,
  error: false,
  created: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_CREATE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_CREATE_COMPLETED:
      return {
        ...state,
        loading: false,
        created: true,
      };
    case MOVIE_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        created: false,
        error: true,
      };
    case MOVIE_CREATE_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
