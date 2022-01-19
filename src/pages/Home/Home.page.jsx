import React, { useRef, useContext } from 'react';

import Layout from '../../components/Layout/Layout.component';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';
import { Context } from '../../context';
import useFetch from '../../utils/hooks/useFetch';

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useContext(Context);
  const { response } = state;
  const { isLoading } = useFetch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        <section className="homepage" ref={sectionRef}>
          <SearchDashboard serchedData={response ? response.items : []} />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
