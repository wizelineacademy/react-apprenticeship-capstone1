import React, { useState, useEffect } from 'react';
import VideoCard from '../../components/VideoCard';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import styles from './Home.module.scss';

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('triggered');
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('/mock.json');
      const json = await res.json();
      setLoading(false);
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
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  // return (
  //   <section className="homepage" ref={sectionRef}>
  //     <h1>Hello stranger!</h1>
  //     {authenticated ? (
  //       <>
  //         <h2>Good to have you back</h2>
  //         <span>
  //           <Link to="/" onClick={deAuthenticate}>
  //             ← logout
  //           </Link>
  //           <span className="separator" />
  //           <Link to="/secret">show me something cool →</Link>
  //         </span>
  //       </>
  //     ) : (
  //       <Link to="/login">let me in →</Link>
  //     )}
  //   </section>
  // );
}

export default HomePage;
