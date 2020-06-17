import {
  USER_CREATE_STARTED,
  USER_CREATE_COMPLETED,
  USER_CREATE_ERROR,
  USER_CREATE_RESET,
} from '../constants/UsersActionTypes';

const initialState = {
  loading: false,
  error: null,
  status: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_CREATE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case USER_CREATE_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    case USER_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_CREATE_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
