import { useState } from 'react';

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const fetchData = async (query, resultsPerPage) => {
    setIsLoading(true);
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&q=${query}`;
    if (resultsPerPage) {
      url = `${url}&maxResults=${resultsPerPage}`;
    }
    try {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  return { response, error, isLoading, fetchData };
};
export default useFetch;
