import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import {
  updateRating,
  fetchMovies,
  updateQuery,
} from "../actions/moviesActions";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingFilter = () => {
  const disptach = useDispatch();

  const rating = useSelector((state) => state.movies.rating);
  const query = useSelector((state) => state.movies.query);

  useEffect(() => {
    if (query === "") {
      const loadMovies = () => disptach(fetchMovies(rating));
      loadMovies();
    }
    //eslint-disable-next-line
  }, [rating]);

  return (
    <Div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            disptach(updateRating(newValue));
            disptach(updateQuery(""));
          }}
        />
      </Box>
    </Div>
  );
};

export default RatingFilter;
