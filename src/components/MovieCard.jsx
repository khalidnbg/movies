import React from "react";
import "../../src/index.css";
import MovieControls from "./MovieControls";

function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
}

export default MovieCard;
