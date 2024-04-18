import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";

function ResultCard({ movie }) {
  const MovieContext = useMovieContext();

  // disable btn when we add a movie
  const storedMovieWatchlist = MovieContext.watchlist.find(
    (m) => m.imdbID === movie.imdbID
  );
  const storedMovieWatched = MovieContext.watched.find(
    (m) => m.imdbID === movie.imdbID
  );

  const watchlistDisabled = storedMovieWatchlist
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisbled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heaing">
          <h3 className="title"> {movie.Title} </h3>
          {movie.Year ? <h4 className="release-date"> {movie.Year} </h4> : "-"}
        </div>
        <div className="controls">
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn"
            disabled={watchlistDisabled}>
            Add To Watch List
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
            disabled={watchedDisbled}>
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
