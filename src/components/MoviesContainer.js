import React from "react";
import { Grid } from "@material-ui/core";

const MoviesContainer = (props) => {
  return (
    <Grid container justify="center">
      {!props.loading &&
        props.movies.map((movie, index) => (
          <Grid item style={{ margin: "1em" }} key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
              width="100%"
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default MoviesContainer;
