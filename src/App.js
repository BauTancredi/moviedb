import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

function App() {
  let response;

  useEffect(() => {
    const apiCall = async () => {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

      try {
        response = await axios.get(URL);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, [response]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
