import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Dialog, IconButton, Grid, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";

import { closeMovieModal } from "../actions/moviesActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: "absolute",
    zIndex: "2000",
    right: ".5em",
    color: "white",
  },
}));

const H1 = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: #043353;
  @media (max-width: 768px) {
    margin: 0.5em;
    font-size: 1.8rem;
  }
`;

const POverview = styled.p`
  max-width: 25em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 768px) {
    max-width: 20em;
    margin: 1em;
  }
`;

const PBold = styled.p`
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

const MovieModal = (props) => {
  const disptach = useDispatch();
  const classes = useStyles(props);

  const open = useSelector((state) => state.movies.open);
  const movie = useSelector((state) => state.movies.movie);

  const handleClose = () => {
    disptach(closeMovieModal());
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth="md"
      onClose={handleClose}
    >
      <Grid container>
        <Grid item container md>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="movie poster"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <H1>{movie.title}</H1>
          <POverview>{movie.overview}</POverview>
          <PBold>Release date: {movie.release_date}</PBold>

          <PBold>
            Rating:
            {new Date(movie.release_date) > new Date()
              ? " Not available"
              : ` ${movie.vote_average}`}
          </PBold>
        </Grid>
      </Grid>
      <IconButton className={classes.closeIcon} onClick={handleClose}>
        <CloseIcon color="primary" />
      </IconButton>
    </Dialog>
  );
};

export default MovieModal;
