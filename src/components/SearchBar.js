import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { makeStyles } from "@material-ui/styles";

import { TextField, Button } from "@material-ui/core";

import {
  updateQuery,
  searchMovie,
  updateRating,
} from "../actions/moviesActions";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#043353",
    transform: "scale(1)",
    transition: "transform 330ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 330ms ease-in-out",
      backgroundColor: "#043353",
    },
  },
}));

const SearchBar = (props) => {
  const classes = useStyles(props);
  const [query, setQuery] = useState("");
  const disptach = useDispatch();

  const rating = useSelector((state) => state.movies.rating);

  useEffect(() => {
    setQuery("");
    disptach(updateQuery(query));
    //eslint-disable-next-line
  }, [rating]);

  const handleSubmit = (e) => {
    e.preventDefault();

    disptach(updateQuery(query));
    disptach(updateRating(null));
    disptach(searchMovie(query));
  };

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "2em" }}
          onClick={handleSubmit}
          className={classes.button}
        >
          SEARCH
        </Button>
      </form>
    </Div>
  );
};

export default SearchBar;
