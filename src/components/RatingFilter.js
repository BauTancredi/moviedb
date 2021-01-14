import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { updateRating, fetchRatedMovies } from "../actions/moviesActions";
import { useSelector, useDispatch } from "react-redux";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingFilter = () => {
  const disptach = useDispatch();

  const rating = useSelector((state) => state.movies.rating);

  useEffect(() => {
    const loadMovies = () => disptach(fetchRatedMovies(rating));
    loadMovies();
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
          }}
        />
      </Box>
    </Div>
  );
};

export default RatingFilter;
