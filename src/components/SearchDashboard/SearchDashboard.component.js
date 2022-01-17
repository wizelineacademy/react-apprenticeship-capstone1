import React from 'react';

import CardsContainer from '../CardsContainer/CardContainer.component';
import Card from '../Card/Card.component';
import useSearch from '../../utils/hooks/useSearch';

const SearchDashboard = ({ serchedData }) => {
  const { handleDetails } = useSearch();
  return (
    <CardsContainer>
      {serchedData.map((item) => {
        const { title, thumbnails, description } = item.snippet;
        return (
          <Card
            {...item}
            key={item.id.videoId}
            handleDetails={() => handleDetails(item.id.videoId, item)}
            title={title}
            videoImage={thumbnails.high.url}
            subtitle={description}
          />
        );
      })}
    </CardsContainer>
  );
};

export default SearchDashboard;
