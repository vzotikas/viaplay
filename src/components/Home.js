import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SeriesModal from "./SeriesModal";
import ListSeries from "./ListSeries";

const Home = ({ serie, type }) => {
  // gets the data from the store GlobalContext
  const { data } = useContext(GlobalContext);

  const [seriesList, setSeriesList] = useState([]);

  // creates a culumns variable from the css value
  const [columns, setColumns] = useState(
    Number(
      getComputedStyle(document.documentElement).getPropertyValue("--columns")
    )
  );

  // updates the columns value depending on screen size
  useEffect(() => {
    function handleResize() {
      setColumns(
        Number(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--columns"
          )
        )
      );
    }
    window.addEventListener("resize", handleResize);
  });

  // set the series list from data
  useEffect(() => {
    data.length > 0 &&
      data[0]._embedded["viaplay:blocks"][0]._embedded["viaplay:products"].map(
        (serie, index) =>
          setSeriesList((series) => [
            ...series,
            {
              id: index,
              name: serie._links.self.title,
              image: serie.content.images.landscape.url,
              synopsis: serie.content.synopsis,
            },
          ])
      );
  }, [data]);

  // function that attaches a keypress to respective key pressed and handles the key press event
  const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);

      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });

    return keyPressed;
  };

  const [selected, setSelected] = useState(undefined);
  const rightPress = useKeyPress("ArrowRight");
  const leftPress = useKeyPress("ArrowLeft");
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (seriesList.length && rightPress) {
      setCursor((prevState) =>
        prevState < seriesList.length - 1 ? prevState + 1 : prevState
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rightPress]);

  useEffect(() => {
    if (seriesList.length && leftPress) {
      setCursor((prevState) =>
        prevState < seriesList.length + 1 && prevState > 0
          ? prevState - 1
          : prevState
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPress]);

  useEffect(() => {
    if (seriesList.length && downPress) {
      setCursor((prevState) =>
        prevState >= 0 && prevState < seriesList.length - columns
          ? prevState + columns
          : prevState
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downPress]);

  useEffect(() => {
    if (seriesList.length && upPress) {
      setCursor((prevState) =>
        prevState > 0 && prevState >= columns ? prevState - columns : prevState
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upPress]);

  useEffect(() => {
    if (seriesList.length && hovered) {
      setCursor(seriesList.indexOf(hovered));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  // ------------

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (seriesList.length && enterPress) {
      setSelected(seriesList[cursor]);
      openModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, enterPress]);

  function openModal() {
    setSelected(seriesList[cursor]);

    setIsOpen(true);
  }

  return (
    <div>
      <SeriesModal
        selected={selected}
        testi="ox"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        enterPress
      />
      <div className="serie-page">
        <div className="container">
          {/* <div className="header">
            <h1 className="heading">Series</h1>
          </div> */}

          {/* <h1 className="selected">
            {selected ? selected.name : "Select a series"}
          </h1> */}
          <div className="serie-grid">
            {seriesList.map((series, i) => (
              <div key={series.id}>
                <ListSeries
                  onRequestOpen={openModal}
                  active={i === cursor}
                  series={series}
                  setHovered={setHovered}
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
