import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Favorites.styles.scss';
import VideoGrid from '@components/VideoGrid';

function FavoritesPage(props) {
  return (
    <section data-testid={props['data-testid']} className="favorites">
      <h1 className="favorites__title">Your favorite videos</h1>
      {props.items ? (
        <VideoGrid items={[]} />
      ) : (
        <div className="favorites__empty-message">
          <h3>You have saved no favorite videos</h3>
          <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
        </div>
      )}
    </section>
  );
}

FavoritesPage.defaultProps = {
  'data-testid': 'favorites-page',
};

export default FavoritesPage;
