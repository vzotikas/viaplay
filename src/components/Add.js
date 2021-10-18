import { useEffect, useState, useContext } from "react";
import ResultCard from "./ResultCard";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const { data } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState("");
  const [seriesList, setSeriesList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // sets the series object from the data
  useEffect(() => {
    if (data) {
      setSeries(data[0]);
    } else {
      setSeries([]);
    }
    setSeriesList([]);
  }, [data]);

  const onChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  // creates a list of the series
  useEffect(() => {
    if (series) {
      series._embedded["viaplay:blocks"][0]._embedded["viaplay:products"].map(
        (list) => {
          return seriesList.push(list);
        }
      );
    }

    setSearchResults([
      seriesList.filter((element) => element._links.self.title.includes(query)),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [series, seriesList]);

  // sets the search reasults
  useEffect(() => {
    setSearchResults([
      seriesList.filter((element) => element._links.self.title.includes(query)),
    ]);
  }, [query, seriesList]);

  return (
    <div className="add-page">
      <div className="constainer">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for series"
              value={query}
              onChange={onChange}
            />
          </div>

          {(searchResults.length > 0 && query && (
            <ul className="results">
              {searchResults[0].map((serie, index) => (
                <li key={index}>
                  <ResultCard serie={serie} />
                </li>
              ))}
            </ul>
          )) || (
            <ul className="results">
              {seriesList.map((serie, index) => (
                <li key={index}>
                  <ResultCard serie={serie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
