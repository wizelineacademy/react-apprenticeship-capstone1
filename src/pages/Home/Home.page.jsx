import React from 'react';

import './Home.styles.scss';
import VideoGrid from '@components/VideoGrid';
import mockData from '@/assets/mocks/youtube-videos-mock.json';

function HomePage() {
  let videos = mockData.items.filter(
    (item) => item.id.kind === 'youtube#video'
  );

  return (
    <section className="home">
      <VideoGrid items={videos} />
    </section>
  );
}

export default HomePage;
