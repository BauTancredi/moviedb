import React from "react";
import { Grid } from "@material-ui/core";

const MovieCard = (props) => {
  return (
    <Grid item style={{ margin: "1em" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
        alt=""
        width="100%"
      />
    </Grid>
  );
};

export default MovieCard;
