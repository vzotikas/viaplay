import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SerieCard from "./SerieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className="serie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Series</h1>
          </div>
          {watched.length > 0 ? (
            <div className="serie-grid">
              {watched.map((serie, index) => (
                <SerieCard key={index} serie={serie} type="watched" />
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
