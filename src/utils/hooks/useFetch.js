import { useState } from 'react';

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // const fetchVideos = async (query, resultsPerPage, type ('search' | 'related')) => {
  // proptypes
  const fetchData = async (query, resultsPerPage, relatedVideos) => {
    const base = 'https://www.googleapis.com/youtube/v3/search?';
    setIsLoading(true);
    let url = `${base}key=${API_KEY}&type=video&part=snippet&q=${query}`;
    if (resultsPerPage) {
      url = `${url}&maxResults=${resultsPerPage}`;
    }
    if (relatedVideos) {
      url = `${base}&key=${API_KEY}&relatedToVideoId=${relatedVideos}&type=video&part=snippet&maxResults=${resultsPerPage}`;
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
