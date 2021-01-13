import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_ERROR,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: true,
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
