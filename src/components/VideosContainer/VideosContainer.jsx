import React, { useEffect, useState } from 'react';
import { StyledContainer } from './VideosContainer.styled';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import axios from 'axios';

function Container({ url }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
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
        let url = `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDwsRUO25ZI25bzx-K7L8QKsRG39bIBiDg`;
        try {
          const result = await axios(url);
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
    <StyledContainer data-testid="container">
      <SearchBar search={handleSearch} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="video-container" data-testid="test-div-container">
          {videos.map((video, index) => (
            <Card
              video={video}
              key={index}
              snippet={video.snippet}
              id={video.id.videoId}
            />
          ))}
        </div>
      )}
      {isError && <div>Something went wrong ...</div>}
    </StyledContainer>
  );
}

export default Container;
