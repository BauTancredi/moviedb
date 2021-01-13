import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";

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
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, []);

  return (
    <div className="App">
      <Header />
      <Grid container justify="center">
        {!loading &&
          movies.map((movie) => (
            <Grid item style={{ margin: "1em" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
                width="100%"
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default App;
