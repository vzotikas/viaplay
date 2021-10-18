import { useEffect, useState } from "react";

const useSetSeriesList = ({ data }) => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    data &&
      data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"].map(
        (series, index) =>
          setSeriesList((seriesList) => [
            ...seriesList,
            {
              id: index,
              title: series._links.self.title,
              image: series.content.images.landscape.url,
              synopsis: series.content.synopsis,
            },
          ])
      );
  }, [data]);

  return seriesList;
};

export default useSetSeriesList;
