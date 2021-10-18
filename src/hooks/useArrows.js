import { useEffect, useState } from "react";
import useKeyPress from "./useKeyPress";

const useArrows = ({
  seriesList,
  setSelectedSeries,
  openModal,
  hoveredItem,
}) => {
  const rightPress = useKeyPress("ArrowRight");
  const leftPress = useKeyPress("ArrowLeft");
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [columnsNumber, setColumnsNumber] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(-1);

  useEffect(() => {
    setColumnsNumber(
      Number(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--columns")
      )
    );
    function handleResize() {
      setColumnsNumber(
        Number(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("--columns")
        )
      );
    }
    window.addEventListener("resize", handleResize);
  }, [columnsNumber]);

  useEffect(() => {
    if (seriesList.length && rightPress) {
      setCursorIndex((prevState) =>
        prevState < seriesList.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [seriesList.length, rightPress]);

  useEffect(() => {
    if (seriesList.length && leftPress) {
      setCursorIndex((prevState) =>
        prevState < seriesList.length + 1 && prevState > 0
          ? prevState - 1
          : prevState
      );
    }
  }, [seriesList.length, leftPress]);

  useEffect(() => {
    if (seriesList.length && downPress) {
      setCursorIndex((prevState) =>
        prevState >= 0 && prevState < seriesList.length - columnsNumber
          ? prevState + columnsNumber
          : (prevState =
              -1 && prevState < seriesList.length - columnsNumber
                ? prevState + 1
                : prevState)
      );
    }
  }, [seriesList.length, downPress, columnsNumber]);

  useEffect(() => {
    if (seriesList.length && upPress) {
      setCursorIndex((prevState) =>
        prevState > 0 && prevState >= columnsNumber
          ? prevState - columnsNumber
          : prevState
      );
    }
  }, [seriesList.length, upPress, columnsNumber]);

  useEffect(() => {
    if (seriesList.length && enterPress) {
      setSelectedSeries(seriesList[cursorIndex]);
      openModal();
    }
  }, [
    seriesList.length,
    cursorIndex,
    enterPress,
    seriesList,
    openModal,
    setSelectedSeries,
  ]);

  useEffect(() => {
    if (seriesList.length && hoveredItem) {
      setCursorIndex(seriesList.indexOf(hoveredItem));
    }
  }, [seriesList.length, hoveredItem, seriesList]);

  return cursorIndex;
};

export default useArrows;
