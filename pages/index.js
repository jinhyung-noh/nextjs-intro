import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";

const Home = ({ results }) => {
  useEffect(() => {}, []);
  return (
    <div className="container">
      <SEO title={"Home"}></SEO>
      {results?.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            ></img>
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;

// only run on the server(only on backends..)
export const getServerSideProps = async () => {
  const { results } = await fetch(`http://localhost:3000/api/movies`).then(
    (response) => response.json()
  );
  return {
    props: {
      results,
    },
  };
};
