import React, { useState, useEffect } from 'react';
import VideoCard from '../../components/VideoCard';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import styles from './Home.module.scss';

function HomePage() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('triggered');
    const fetchData = async () => {
      // setLoading(true);
      const res = await fetch('/mock.json');
      const json = await res.json();
      // setLoading(false);
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <section className={styles.homeContainer}>
      <h1>Recommended for you</h1>
      <div className={styles.cardGrid}>
        {data
          ? data.items.map((el, i) => (
              <VideoCard
                title={el.snippet.title}
                description={el.snippet.description}
                img={el.snippet.thumbnails.high.url}
                key={`${el.id.channelId}${i}`}
              />
            ))
          : 'loading'}
      </div>
      {/* {data ? console.log(`loading ${loading}  - data ${data}`) : 'loading'} */}
    </section>
  );
}

export default HomePage;
