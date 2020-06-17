import {
  MOVIE_DELETE_STARTED,
  MOVIE_DELETE_COMPLETED,
  MOVIE_DELETE_ERROR,
  MOVIE_DELETE_RESET,
} from '../constants/MoviesActionTypes';

const initialState = {
  loading: false,
  error: null,
  delete: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_DELETE_COMPLETED:
      return {
        ...state,
        loading: false,
        delete: true,
      };
    case MOVIE_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOVIE_DELETE_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
