import React from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";

import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MoviesContainer = (props) => {
  const movies = useSelector((state) => state.movies.movies);
  const open = useSelector((state) => state.movies.open);
  const loading = useSelector((state) => state.movies.loading);

  return (
    <Grid container justify="center">
      {loading === true ? (
        <CircularProgress />
      ) : movies.length === 0 ? (
        <p>No movies were found</p>
      ) : (
        movies
          .filter((movie) => movie.backdrop_path !== null)
          .map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
      {open && <MovieModal />}
    </Grid>
  );
};

export default MoviesContainer;
