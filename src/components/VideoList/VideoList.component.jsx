import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import he from 'he';

import './VideoList.styles.scss';
import BreadCrumb from '@components/BreadCrumb';
import Button from '@components/Button';
import Loader from '@components/Loader';

function VideoList(props) {
  const navigate = useNavigate();
  let [filter, setFilter] = useState('related');

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
      {props.items.map((item) => (
        <div
          key={item.id.videoId}
          className="video-item"
          onClick={() => navigate(`/details/${item.id.videoId}`)}
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
        ) : props.loadMore ? (
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
