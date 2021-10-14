import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SerieCard from "./SerieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="serie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My Watchlist</h1>
          </div>
          {watchlist.length > 0 ? (
            <div className="serie-grid">
              {watchlist.map((serie, index) => (
                <SerieCard key={index} serie={serie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-series">No series in your list</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
