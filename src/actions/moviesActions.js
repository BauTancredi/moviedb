import axios from "axios";
import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_ERROR,
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
