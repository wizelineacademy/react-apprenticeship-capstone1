import React from 'react';

import './Home.styles.scss';
import VideoGrid from '@components/VideoGrid';

function HomePage() {
  return (
    <section className="home">
      <VideoGrid items={[]} />
    </section>
  );
}

export default HomePage;
