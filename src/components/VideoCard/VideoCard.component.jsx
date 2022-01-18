import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import he from 'he';

import './VideoCard.styles.scss';
import { useAuth } from '@providers/Auth';
import { useFavorites } from '@providers/Favorites';

function VideoCard(props) {
  let navigate = useNavigate();
  let { authenticated } = useAuth();
  let [ favorites ] = useFavorites();
  let favoritesMap = new Map(favorites);

  return (
    <div
      data-testid={props.testId}
      className={'video-card ' + props.className}
      onClick={() => navigate(`/details/${props.item.id}`)}
    >
      <img
        src={
          props.item.snippet.thumbnails.medium.url
            ? props.item.snippet.thumbnails.medium.url
            : null
        }
        alt="video&#39;s image"
        className="video-card__image"
      />
      <div className="video-card__info">
        <div className="video-card__title-column">
          <h4 className="video-card__title">
            {he.decode(props.item.snippet.title)}
          </h4>
          <h5>{moment(new Date(props.item.snippet.publishTime)).fromNow()}</h5>
        </div>
        {authenticated ? (
          <FontAwesomeIcon
            icon={[favoritesMap.has(props.item.id) ? 'fas' : 'far', 'heart']}
            className="video-card__like-icon"
          />
        ) : null}
      </div>
    </div>
  );
}

VideoCard.defaultProps = {
  testId: '',
  className: '',
  item: {
    id: '',
    snippet: {
      thumbnails: { medium: { url: '' } },
      publishTime: new Date(0, 0, 0, 0, 0, 0, 0),
    },
  },
};

export default VideoCard;
