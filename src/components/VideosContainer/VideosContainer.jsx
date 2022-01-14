import React, { useEffect, useState } from 'react';
import { StyledContainer } from './VideosContainer.styled';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import axios from 'axios';

function Container() {
  const [videos, setVideos] = useState([]);
  const [videosSearched, setVideosSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const KEY = 'AIzaSyDrde2OFO_CNqcG5Z2jjDXzNczQxE_RpGg';

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyDrde2OFO_CNqcG5Z2jjDXzNczQxE_RpGg'
        );
        setVideos(result.data.items);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    if (e.target.value.length) {
      setIsLoading(true);
      setIsSearching(true);
      let query = e.target.value;

      const fecthVideosSearched = async () => {
        try {
          const result = await axios(
            `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${KEY}`
          );
          setVideosSearched(result.data.items);
          setIsLoading(false);
          console.log('results after get', videosSearched, isLoading);
        } catch (error) {
          console.log(error);
        }
      };
      fecthVideosSearched();
    }
  };

  return (
    <StyledContainer>
      <SearchBar search={handleSearch} />
      {isLoading && !isSearching ? (
        <div>Loading ...</div>
      ) : (
        <div className="video-container">
          {videos.map((video, index) => (
            <Card key={index} snippet={video.snippet} id={video.id.videoId} />
          ))}
        </div>
      )}
      {isLoading && isSearching ? (
        <div>Loading ...</div>
      ) : (
        <div className="video-container">
          {videosSearched.map((video, index) => (
            <Card key={index} snippet={video.snippet} id={video.id.videoId} />
          ))}
        </div>
      )}

      {isError && <div>Something went wrong ...</div>}
    </StyledContainer>
  );
}

export default Container;
