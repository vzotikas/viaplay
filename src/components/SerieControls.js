import { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { GlobalContext } from "../context/GlobalState";

const SerieControls = ({ serie, type }) => {
  // uses the GlobalContext Provider
  const {
    removeSerieFromWatchList,
    addSerieToWatched,
    moveToWatchList,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addSerieToWatched(serie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeSerieFromWatchList(serie)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(serie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeFromWatched(serie)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "list" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(serie)}>
            <i className="fa-fw fas fa-info-circle"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default SerieControls;
