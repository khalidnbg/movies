import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";

function WatchList() {
  const MovieContext = useMovieContext();

  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watch List</h1>
          <span className="movie-count">
            {MovieContext.watchlist.length}
            {MovieContext.watchlist.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.ImdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2
            className="no-movies"
            style={{ color: "#c4c4c4", textAlign: "center" }}>
            No movies in your list, add some ...
          </h2>
        )}
      </div>
    </div>
  );
}

export default WatchList;
