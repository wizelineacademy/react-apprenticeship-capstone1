import React, { useEffect, useState, useContext } from 'react';
import { StyledContainer } from './VideosContainer.styled';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';

function Container() {
  const { getVideoDetails } = useContext(AppContext);

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let devRoute = 'http://localhost:3000/items';
        //let realRoute = `https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=15`
        const result = await axios(devRoute);
        setVideos(result.data);
        //setVideos(result.data.items);
      } catch (error) {
        setIsError(true);
        console.log('is Error', isError);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    if (e.target.value.length) {
      //let query = e.target.value;
      setIsLoading(true);

      const fecthVideosSearched = async () => {
        let devRoute = 'http://localhost:3000/items';
        //let realRoute = `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

        try {
          const result = await axios(devRoute);
          //setVideos(result.data.items);
          setVideos(result.data);

          setIsLoading(false);
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
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="video-container">
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
