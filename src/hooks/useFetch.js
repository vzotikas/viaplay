import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const _fetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        setLoading(false);
        setData(json);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    _fetch();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;

// useEffect(() => {
//     fetch("/pc-se/serier/samtliga")
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.errors) {
//           setSeries(data);
//         } else {
//           setSeries([]);
//         }
//       });
//     setSeriesTitle([]);
//   }, []);
