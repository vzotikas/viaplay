import React from "react";

const ListSeries = ({ series, active, setHovered, onRequestOpen }) => {
  return (
    <div
      className={`serie-card ${active ? "card-active" : ""}`}
      onClick={() => onRequestOpen()}
      onMouseEnter={() => setHovered(series)}
      onMouseLeave={() => setHovered(undefined)}
    >
      <div className="overlay"></div>

      <img src={series.image} alt="" />
      {/* <SerieControls type={type} serie={serie} /> */}
    </div>
  );
};
export default ListSeries;
