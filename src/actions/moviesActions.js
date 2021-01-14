import axios from "axios";
import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_MOVIE,
  SET_RATING,
} from "../types";

export function fetchPopularMovies() {
  return async (disptach) => {
    disptach(fetchMovies());

    try {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      const response = await axios.get(URL);

      // Update state success
      disptach(fetchMoviesSuccess(response.data.results));
    } catch (error) {
      console.log(error);
      disptach(fetchMoviesError(true));
    }
  };
}

const fetchMovies = () => ({
  type: FETCH_POPULAR_MOVIES,
  payload: true,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesError = (status) => ({
  type: FETCH_POPULAR_MOVIES_ERROR,
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

export function fetchRatedMovies(rating) {
  return async (disptach) => {
    disptach(fetchMovies());

    const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    let finalUrl;
    switch (rating) {
      case null:
        finalUrl = BASE_URL;
        break;
      case 1:
        finalUrl = BASE_URL + "&vote_average.gte=0&vote_average.lte=2";
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
      console.log(response.data.results);
      disptach(fetchMoviesSuccess(response.data.results));
    } catch (error) {
      console.log(error);
      disptach(fetchMoviesError(true));
    }
  };
}
