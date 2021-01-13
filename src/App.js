import React from "react";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MoviesContainer />
    </Provider>
  );
}

export default App;
