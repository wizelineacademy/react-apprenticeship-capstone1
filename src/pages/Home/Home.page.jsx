import React, { useEffect, useState, useRef } from 'react';

import './Home.styles.scss';
import VideoGrid from '@components/VideoGrid';
import { useSearch } from '@providers/Search';
import useFetchSearch from '@src/hooks/useFetchSearch.hook';

function HomePage(props) {
  let [pageToken, setPageToken] = useState('');
  let [videos, setVideos] = useState([]);
  let [searchContext] = useSearch();
  let [response, loading] = useFetchSearch(searchContext.searchTerm, pageToken);

  const lastSearchTerm = useRef(0);
  useEffect(() => {
    if (response) {
      if (lastSearchTerm.current !== searchContext.searchTerm) {
        lastSearchTerm.current = searchContext.searchTerm;
        setVideos(response.items);
      } else {
        let items = response.items.filter(
          (item) => !videos.find((video) => video.id === item.id)
        );
        setVideos((prevState) => prevState.concat(items));
      }
    }
  }, [response ? response.etag : '', searchContext.searchTerm]);

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
