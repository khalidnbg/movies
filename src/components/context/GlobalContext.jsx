//  1
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

// 3
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// 2
export const GlobalContext = createContext(initialState);

// 4
const ContextProvider = ({ children }) => {
  // 7
  const [state, dispatch] = useReducer(reducer, initialState);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // 5
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 6
export default ContextProvider;

// 8
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
