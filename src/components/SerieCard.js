import React from "react";
import SerieControls from "./SerieControls";

const SerieCard = ({ serie, type }) => {
  return (
    <div>
      <div className="serie-card">
        <div className="overlay"></div>
        <img src={serie.content.images.landscape.url} alt="" />
        <SerieControls type={type} serie={serie} />
      </div>
    </div>
  );
};

export default SerieCard;
