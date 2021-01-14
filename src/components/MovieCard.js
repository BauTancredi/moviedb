import React from "react";
import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import { openMovieModal } from "../actions/moviesActions";

const MovieCard = (props) => {
  const disptach = useDispatch();

  return (
    <Grid item style={{ margin: "1em", cursor: "pointer" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
        alt="movie poster"
        width="100%"
        onClick={() => disptach(openMovieModal(props.movie))}
      />
    </Grid>
  );
};

export default MovieCard;
