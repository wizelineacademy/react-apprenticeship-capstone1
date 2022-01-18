import React from 'react';

import './VideoGrid.styles.scss';
import VideoCard from '@components/VideoCard';
import Button from '@components/Button';
import Loader from '@components/Loader';

function VideoGrid(props) {
  return (
    <div data-testid={props['data-testid']} className="video-grid__container">
      <div className={'video-grid ' + props.className}>
        {props.items.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
      <div className="video-grid__load-more-row">
        {props.loading ? (
          <Loader />
        ) : props.loadMore ? (
          <Button text="Load more" onClick={props.loadMore} />
        ) : null}
      </div>
    </div>
  );
}

VideoGrid.defaultProps = {
  'data-testid': '',
  className: '',
  loadMore: null,
  loading: false,
  items: [],
};

export default VideoGrid;
