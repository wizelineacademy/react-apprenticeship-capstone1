import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import he from 'he';

import './VideoList.styles.scss';
import { useFavorites } from '@providers/Favorites';
import BreadCrumb from '@components/BreadCrumb';
import Button from '@components/Button';
import Loader from '@components/Loader';

function VideoList(props) {
  const navigate = useNavigate();
  let [filter, setFilter] = useState('related');
  let [ favorites ] = useFavorites();

  let videos = [];
  if (filter === 'related')
    videos = props.items;
  else
    videos = favorites.map((item) => item[1]);

  return (
    <div
      data-testid={props['data-testid']}
      className={'video-list ' + props.className}
    >
      <BreadCrumb
        selected={filter}
        onSelectedChange={setFilter}
        className="video-list__breadcrumb"
      />
      {videos.map((item) => (
        <div
          key={item.id}
          className="video-item"
          onClick={() => navigate(`/details/${item.id}`)}
        >
          <img
            src={item ? item.snippet.thumbnails.default.url : null}
            alt="video&#39;s image"
            className="video-item__image"
          />
          <div className="video-item__info">
            <h5>{he.decode(item.snippet.title)}</h5>
            <small>
              {moment(new Date(item.snippet.publishTime)).fromNow()}
            </small>
          </div>
        </div>
      ))}
      <div className="video-list__load-more-row">
        {props.loading ? (
          <Loader />
        ) : props.loadMore && filter === 'related' ? (
          <Button text="Load more" onClick={props.loadMore} />
        ) : null}
      </div>
    </div>
  );
}

VideoList.defaultProps = {
  'data-testid': '',
  className: '',
  loading: false,
  loadMore: () => {},
  items: [],
};

export default VideoList;
