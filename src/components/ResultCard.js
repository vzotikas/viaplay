import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ serie }) => {
  const { addSerieToWatchList, watchlist, watched } = useContext(GlobalContext);
  const storedSerie = watchlist.find(
    (object) => object._links.self.title === serie._links.self.title
  );

  const storedSerieWatched = watched.find(
    (object) => object._links.self.title === serie._links.self.title
  );

  const watchlistDisabled = storedSerie
    ? true
    : storedSerieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img src={serie.content.images.landscape.url} alt="" />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title"> {serie._links.self.title}</h3>
          <h4 className="release-date"> {serie.content.production.year}</h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addSerieToWatchList(serie)}
          >
            Add To Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
