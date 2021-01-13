import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../actions/moviesActions";

const MoviesContainer = (props) => {
  const disptach = useDispatch();

  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const loadMovies = () => disptach(fetchPopularMovies());
    loadMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid container justify="center">
      {movies.length === 0 ? (
        <CircularProgress />
      ) : (
        movies.map((movie, index) => (
          <Grid item style={{ margin: "1em" }} key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
              width="100%"
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default MoviesContainer;
