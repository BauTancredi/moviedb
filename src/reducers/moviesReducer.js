import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_MOVIE,
  SET_RATING,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: true,
  movie: "",
  open: false,
  rating: null,
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
    case SET_MODAL_MOVIE:
      return { ...state, movie: action.payload };
    case OPEN_MODAL:
      return { ...state, open: action.payload };
    case CLOSE_MODAL:
      return { ...state, open: action.payload };
    case SET_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
}
