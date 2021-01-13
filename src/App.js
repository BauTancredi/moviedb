import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <MoviesContainer movies={movies} loading={loading} />
    </Provider>
  );
}

export default App;
