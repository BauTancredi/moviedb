import React from "react";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RatingFilter = () => {
  return (
    <Div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
        // name="simple-controlled"
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        />
      </Box>
    </Div>
  );
};

export default RatingFilter;
