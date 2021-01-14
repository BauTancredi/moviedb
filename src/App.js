import React from "react";
import Header from "./components/Header";
import RatingFilter from "./components/RatingFilter";
import MoviesContainer from "./components/MoviesContainer";
import SearchBar from "./components/SearchBar";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SearchBar />
      <RatingFilter />
      <MoviesContainer />
    </Provider>
  );
}

export default App;
