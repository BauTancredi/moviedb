import axios from "axios";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_MOVIE,
  SET_RATING,
  SET_QUERY,
} from "../types";

export function fetchMovies(rating) {
  return async (disptach) => {
    disptach(fetchMoviesStart());

    const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    let finalUrl;
    switch (rating) {
      case null:
        finalUrl = BASE_URL;
        break;
      case 1:
        finalUrl = BASE_URL + "&vote_average.gte=1&vote_average.lte=2";
        break;
      case 2:
        finalUrl = BASE_URL + "&vote_average.gte=2&vote_average.lte=4";
        break;
      case 3:
        finalUrl = BASE_URL + "&vote_average.gte=4&vote_average.lte=6";
        break;
      case 4:
        finalUrl = BASE_URL + "&vote_average.gte=6&vote_average.lte=8";
        break;
      case 5:
        finalUrl = BASE_URL + "&vote_average.gte=8&vote_average.lte=10";
        break;

      default:
        break;
    }

    try {
      const response = await axios.get(finalUrl);

      // Update state success
      disptach(fetchMoviesSuccess(response.data.results));
    } catch (error) {
      console.log(error);
      disptach(fetchMoviesError(true));
    }
  };
}

const fetchMoviesStart = () => ({
  type: FETCH_MOVIES,
  payload: true,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesError = (status) => ({
  type: FETCH_MOVIES_ERROR,
  payload: status,
});

export function openMovieModal(movie) {
  return (disptach) => {
    disptach(setMovie(movie));
    disptach(openModal());
  };
}

export function closeMovieModal() {
  return (disptach) => {
    disptach(closeModal());
    disptach(setMovie(""));
  };
}

const openModal = () => ({
  type: OPEN_MODAL,
  payload: true,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: false,
});

const setMovie = (movie) => ({
  type: SET_MODAL_MOVIE,
  payload: movie,
});

export function updateRating(rating) {
  return (disptach) => {
    disptach(setRating(rating));
  };
}

const setRating = (rating) => ({
  type: SET_RATING,
  payload: rating,
});

export function updateQuery(query) {
  return (disptach) => {
    disptach(setQuery(query));
  };
}

const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export function searchMovie(query) {
  return async (disptach) => {
    disptach(searchMoviesStart());
    let URL;
    if (query !== "") {
      URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    } else {
      URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    }

    try {
      const response = await axios.get(URL);

      // Update state success
      disptach(searchMoviesSuccess(response.data.results));
    } catch (error) {
      console.log(error);
      disptach(searchMoviesError(true));
    }
  };
}

const searchMoviesStart = () => ({
  type: SEARCH_MOVIES,
  payload: true,
});

const searchMoviesSuccess = (movies) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

const searchMoviesError = (status) => ({
  type: SEARCH_MOVIES_ERROR,
  payload: status,
});
