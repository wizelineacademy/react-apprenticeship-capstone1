import React, { useRef, useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';

import Layout from '../../components/Layout/Layout.component';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';
import { Context } from '../../context';
import '../../global.css';
import useFetch from '../../utils/hooks/useFetch';

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useContext(Context);
  const { response } = state;
  const { isLoading } = useFetch();

  if (isLoading) return;
  <div className="loading-container">
    <BallTriangle color="#e64398" height={100} width={100} />;
  </div>;

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        <section className="homepage" ref={sectionRef}>
          {response.etag === ' ' ? (
            <div className="loading-container">No videos yet</div>
          ) : (
            <SearchDashboard serchedData={response ? response.items : []} />
          )}
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
