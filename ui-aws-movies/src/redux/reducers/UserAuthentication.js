import {
  AUTHENTICATION_STARTED,
  AUTHENTICATION_COMPLETED,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_RESET,
} from '../constants/UsersActionTypes';

const initialState = {
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_STARTED:
      return {
        ...state,
        loading: true,
      };
    case AUTHENTICATION_COMPLETED:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case AUTHENTICATION_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
