import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import useFetch from "../hooks/useFetch";

// create context
export const GlobalContext = createContext();

// provider components
export const GlobalProvider = (props) => {
  const { data, loading, error } = useFetch("/pc-se/serier/samtliga");

  // initial state
  const [initialState, setInitialState] = useState({
    data: [],
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    watched: localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [],
  });

  useEffect(() => {
    if (loading === false) {
      setInitialState((initialState.data = [data]));
    } else {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //   actions
  const addSerieToWatchList = (serie) => {
    dispatch({ type: "ADD_SERIE_TO_WATCHLIST", payload: serie });
  };

  const removeSerieFromWatchList = (serie) => {
    dispatch({ type: "REMOVE_SERIE_FROM_WATCHLIST", payload: serie });
  };

  const addSerieToWatched = (serie) => {
    dispatch({ type: "ADD_SERIE_TO_WATCHED", payload: serie });
  };

  const moveToWatchList = (serie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: serie });
  };

  const removeFromWatched = (serie) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: serie });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        watchlist: state.watchlist,
        watched: state.watched,
        addSerieToWatchList,
        removeSerieFromWatchList,
        addSerieToWatched,
        moveToWatchList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
