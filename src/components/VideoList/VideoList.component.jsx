import React, { useState } from 'react';
import moment from 'moment';
import he from 'he';

import './VideoList.styles.scss';
import BreadCrumb from '@components/BreadCrumb';
import Button from '@components/Button';
import Loader from '@components/Loader';

function VideoList(props) {
  let [filter, setFilter] = useState('related');

  return (
    <div className={'video-list ' + props.className}>
      <BreadCrumb
        selected={filter}
        onSelectedChange={setFilter}
        className="video-list__breadcrumb"
      />
      {props.items.map((item) => (
        <div key={item.id.videoId} className="video-item">
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
  className: '',
  loadMore: null,
  items: [],
};

export default VideoList;
