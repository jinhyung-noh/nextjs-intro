import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";

const API_KEY = "16127135bb3944f7906c90af1ebdd09d";

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      ).then((response) => response.json());
      setMovies(results);
    })();
  });
  return (
    <div>
      <SEO title={"Home"}></SEO>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
