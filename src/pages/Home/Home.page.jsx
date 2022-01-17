import React, { useEffect, useState } from 'react';

import './Home.styles.scss';
import useFetchSearch from '@src/hooks/useFetchSearch.hook';
import VideoGrid from '@components/VideoGrid';

function HomePage(props) {
  let [pageToken, setPageToken] = useState('');
  let [videos, setVideos] = useState([]);
  let [response, loading] = useFetchSearch('Wizeline', pageToken);

  useEffect(() => {
    if (response) setVideos((prevState) => prevState.concat(response.items));
  }, [response ? response.etag : '']);

  return (
    <section data-testid={props['data-testid']} className="home">
      <VideoGrid
        items={videos}
        loading={loading}
        loadMore={response ? () => setPageToken(response.nextPageToken) : null}
      />
    </section>
  );
}

HomePage.defaultProps = {
  'data-testid': '',
};

export default HomePage;
