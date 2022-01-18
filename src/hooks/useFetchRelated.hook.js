import useFetch from '@src/hooks/useFetch';
import { YOUTUBE_API_KEY } from '@utils/constants';
import produce from "immer";

function useFetchRelated(videoId, pageToken) {
  let url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('relatedToVideoId', videoId);
  url.searchParams.set('pageToken', pageToken);
  url.searchParams.set('key', YOUTUBE_API_KEY);
  url.searchParams.set('type', 'video');
  url.searchParams.set('safeSearch', 'strict');
  url.searchParams.set('order', 'relevance');
  url.searchParams.set('maxResults', '25');
  url.searchParams.set('part', 'snippet');
  
  let [response, loading, error] = useFetch(url.toString(), { method: 'GET' }, arguments);
  let reorganizedResponse = produce(response, draft => {
    if (response) {
      draft.items = draft.items.map((item) => {
        item.id = item.id.videoId;
        return item;
      });  
    }
  });
  return [reorganizedResponse, loading, error];
}

export default useFetchRelated;
