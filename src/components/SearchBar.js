import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
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

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const disptach = useDispatch();

  const rating = useSelector((state) => state.movies.rating);

  useEffect(() => {
    setQuery("");
    disptach(updateQuery(query));
    //eslint-disable-next-line
  }, [rating]);

  return (
    <Div>
      <form>
        <TextField
          id="standard-basic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "2em" }}
          onClick={() => {
            disptach(updateQuery(query));
            disptach(updateRating(null));
            disptach(searchMovie(query));
          }}
        >
          SEARCH
        </Button>
      </form>
    </Div>
  );
};

export default SearchBar;
