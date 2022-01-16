import useFetch from '@src/hooks/useFetch';
import { YOUTUBE_API_KEY } from '@utils/constants';

function useFetchSearch(searchTerm, pageToken) {
  let url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('q', searchTerm);
  url.searchParams.set('pageToken', pageToken);
  url.searchParams.set('key', YOUTUBE_API_KEY);
  url.searchParams.set('type', 'video');
  url.searchParams.set('safeSearch', 'strict');
  url.searchParams.set('order', 'relevance');
  url.searchParams.set('maxResults', '20');
  url.searchParams.set('part', 'snippet');
  return useFetch(url.toString(), { method: 'GET' }, arguments);
}

export default useFetchSearch;
