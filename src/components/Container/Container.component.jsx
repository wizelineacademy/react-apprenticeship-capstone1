import React, { useEffect, useState } from 'react';
import { StyledContainer } from './Container.styled';

import Card from '../Card/Card.component';
import data from '../../data.json';
import axios from 'axios';

function Container() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null)
  videos = response.data

  useEffect(() => {
    axios
    .get('url')
    .then(resp => {
      setVideos(resp.data)
    })
    .catch(error => setError(error))
    
    })
    return () => {};
  }, []);

  return (
    <StyledContainer>
      {data.items.map((video, index) => (
        <Card
          key={index}
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.default.url}
          data={video.snippet.publishTime}
        />
      ))}
    </StyledContainer>
  );
}

export default Container;
