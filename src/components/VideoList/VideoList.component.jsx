import React, { useState } from 'react';

import './VideoList.styles.scss';
import BreadCrumb from '@components/BreadCrumb';
import Button from '@components/Button';
import image from './pexels-amina-filkins-5414061.jpeg';

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
        <div key={item.id} className="video-item">
          <img
            src={item.image ? item.image : image}
            alt="video&#39;s image"
            className="video-item__image"
          />
          <div className="video-item__info">
            <h3>{item.title}</h3>
            <p>
              {item.views} - {item.time}
            </p>
          </div>
        </div>
      ))}
      {props.loadMore ? (
        <div className="video-list__load-more-row">
          <Button text="Load more" onClick={props.loadMore} />
        </div>
      ) : null}
    </div>
  );
}

VideoList.defaultProps = {
  className: '',
  loadMore: null,
  items: [
    {
      image: null,
      title: 'Video title',
      views: '4.2M views',
      time: '3 years ago',
      onClick: null,
    },
    {
      image: null,
      title: 'Video title',
      views: '4.2M views',
      time: '3 years ago',
      onClick: null,
    },
  ],
};

export default VideoList;
