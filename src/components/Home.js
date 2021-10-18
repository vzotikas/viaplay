import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SeriesModal from "./SeriesModal";
import SeriesListItem from "./SeriesListItem";
import useArrows from "../hooks/useArrows";
import useSetSeriesList from "../hooks/useSetSeriesList";

const Home = ({ serie, type }) => {
  const state = useContext(GlobalContext);
  const data = state.data[0];
  const seriesList = useSetSeriesList({ data });
  const [hoveredItem, setHoveredItem] = useState(undefined);
  const [selectedSeries, setSelectedSeries] = useState(undefined);
  const [modalIsOpen, setIsOpen] = useState(false);

  const cursorIndex = useArrows({
    seriesList,
    setSelectedSeries,
    openModal,
    hoveredItem,
  });

  function openModal() {
    setSelectedSeries(seriesList[cursorIndex]);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SeriesModal
        selectedSeries={selectedSeries}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Series Modal"
      />
      <div className="serie-page">
        <div className="container">
          <div className="serie-grid">
            {seriesList.map((series, index) => (
              <div key={series.id}>
                <SeriesListItem
                  onRequestOpen={openModal}
                  active={index === cursorIndex}
                  series={series}
                  setHoveredItem={setHoveredItem}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
