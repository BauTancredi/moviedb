import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_MOVIE,
  SET_RATING,
  SET_QUERY,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: true,
  movie: "",
  open: false,
  rating: null,
  query: "",
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_ERROR:
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
    case SET_QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
}
