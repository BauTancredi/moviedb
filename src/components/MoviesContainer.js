import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../actions/moviesActions";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MoviesContainer = (props) => {
  const disptach = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const open = useSelector((state) => state.movies.open);

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
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
      {open && <MovieModal />}
    </Grid>
  );
};

export default MoviesContainer;
