import React from 'react';

import './Home.styles.scss';
import VideoGrid from '@components/VideoGrid';
import mockData from '@src/assets/mocks/youtube-videos-mock.json';

function HomePage(props) {
  let videos = mockData.items.filter(
    (item) => item.id.kind === 'youtube#video'
  );

  return (
    <section data-testid={props['data-testid']} className="home">
      <VideoGrid items={videos} />
    </section>
  );
}

HomePage.defaultProps = {
  'data-testid': 'home-page',
};

export default HomePage;
