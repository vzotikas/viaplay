import React, { useEffect, useState, useContext } from "react";
import ResultCard from "./ResultCard";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const { data } = useContext(GlobalContext);

  const [query, setQuery] = useState("");
  const [series, setSeries] = useState("");
  const [seriesTitle, setSeriesTitle] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (data) {
      setSeries(data[0]);
    } else {
      setSeries([]);
    }
    setSeriesTitle([]);
  }, [data]);

  const onChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (series) {
      series._embedded["viaplay:blocks"][0]._embedded["viaplay:products"].map(
        (title) => {
          return seriesTitle.push(title);
        }
      );
    }
    setResults([
      seriesTitle.filter((element) =>
        element._links.self.title.includes(query)
      ),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [series, seriesTitle]);

  useEffect(() => {
    setResults([
      seriesTitle.filter((element) =>
        element._links.self.title.includes(query)
      ),
    ]);
  }, [query, seriesTitle]);

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

          {(results.length > 0 && query && (
            <ul className="results">
              {results[0].map((serie, index) => (
                <li key={index}>
                  <ResultCard serie={serie} />
                </li>
              ))}
            </ul>
          )) || (
            <ul className="results">
              {seriesTitle.map((serie, index) => (
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
