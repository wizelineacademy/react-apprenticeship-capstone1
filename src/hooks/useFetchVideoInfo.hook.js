import useFetch from '@src/hooks/useFetch';
import { YOUTUBE_API_KEY } from '@utils/constants';

function useFetchVideoInfo(videoId) {
  let url = new URL('https://www.googleapis.com/youtube/v3/videos');
  url.searchParams.set('key', YOUTUBE_API_KEY);
  url.searchParams.set('id', videoId);
  url.searchParams.set('part', 'snippet,statistics');
  return useFetch(url.toString(), { method: 'GET' }, arguments);
}

export default useFetchVideoInfo;
