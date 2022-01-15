import React, { useEffect, useState } from 'react';
import { StyledContainer } from './VideosContainer.styled';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import axios from 'axios';

function Container() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(
          `https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=${process.env.REACT_APP_YOUTUBE_KEY}`
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
      let query = e.target.value;
      setIsLoading(true);

      const fecthVideosSearched = async () => {
        try {
          const result = await axios(
            `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.envREACT_APP_YOUTUBE_KEY}`
          );
          setVideos(result.data.items);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
        }
      };
      fecthVideosSearched();
    }
  };

  return (
    <StyledContainer>
      <SearchBar search={handleSearch} />
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="video-container">
          {videos.map((video, index) => (
            <Card key={index} snippet={video.snippet} id={video.id.videoId} />
          ))}
        </div>
      )}
      {isError && <div>Something went wrong ...</div>}
    </StyledContainer>
  );
}

export default Container;
