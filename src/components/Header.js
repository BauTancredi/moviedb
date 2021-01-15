import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  color: #043353;
`;

const Header = () => {
  return (
    <header>
      <H1>MOVIEDB</H1>
    </header>
  );
};

export default Header;
