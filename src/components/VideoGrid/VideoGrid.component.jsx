import React from 'react';

import './VideoGrid.styles.scss';
import VideoCard from '@components/VideoCard';
import Button from '@components/Button';

function VideoGrid(props) {
  return (
    <div className="video-grid__container">
      <div className={'video-grid ' + props.className}>
        {props.items.map((item) => (
          <VideoCard
            key={item.id}
            image={item.image}
            liked={item.liked}
            title={item.title}
            views={item.views}
            time={item.time}
            onClick={() => {}}
          />
        ))}
      </div>
      {props.loadMore ? (
        <div className="video-grid__load-more-row">
          <Button text="Load more" onClick={props.loadMore} />
        </div>
      ) : null}
    </div>
  );
}

VideoGrid.defaultProps = {
  className: '',
  loadMore: null,
  items: [],
};

export default VideoGrid;
