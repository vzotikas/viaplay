const ListSeries = ({ series, active, setHoveredItem, onRequestOpen }) => {
  return (
    <div
      className={`serie-card ${active ? "card-active" : ""}`}
      onMouseEnter={() => setHoveredItem(series)}
      onMouseLeave={() => setHoveredItem(undefined)}
      onClick={() => onRequestOpen()}
    >
      <div className="overlay"></div>
      <img src={series.image} alt="" />
      {/* <SerieControls type={type} serie={serie} /> */}
    </div>
  );
};
export default ListSeries;
