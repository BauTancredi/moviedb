import React from "react";
import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { openMovieModal } from "../actions/moviesActions";

const useStyles = makeStyles((theme) => ({
  movieCard: {
    margin: "1em",
    cursor: "pointer",

    transform: "scale(1)",
    transition: "transform 330ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 330ms ease-in-out",
    },
  },
}));

const MovieCard = (props) => {
  const classes = useStyles(props);
  const disptach = useDispatch();

  return (
    <Grid item className={classes.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
        alt="movie poster"
        width="100%"
        onClick={() => disptach(openMovieModal(props.movie))}
        style={{ borderRadius: "10px" }}
      />
    </Grid>
  );
};

export default MovieCard;
