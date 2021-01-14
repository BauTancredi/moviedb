import React from "react";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeMovieModal } from "../actions/moviesActions";
import { Dialog, IconButton, Grid, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: "absolute",
    zIndex: "2000",
    right: ".5em",
  },
}));

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
            alt=""
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <h1 style={{ textAlign: "center" }}>{movie.title}</h1>
          <p style={{ maxWidth: "25em", textAlign: "center" }}>
            {movie.overview}
          </p>
          <p style={{ fontWeight: "bold" }}>
            Release date: {movie.release_date}
          </p>
          <p style={{ fontWeight: "bold" }}>Rating: {movie.vote_average}</p>
        </Grid>
      </Grid>
      <IconButton className={classes.closeIcon} onClick={handleClose}>
        <CloseIcon color="primary" />
      </IconButton>
    </Dialog>
  );
};

export default MovieModal;
