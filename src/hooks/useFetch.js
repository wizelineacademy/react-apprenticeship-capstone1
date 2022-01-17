import { useEffect } from 'react';
import useSafeState from '@src/hooks/useSafeState';
import debounce from '@utils/debounce';

const DEFAULT_OPTIONS = {
  method: 'POST',
  mode: 'cors',
  cache: 'default',
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'manual',
  referrerPolicy: 'no-referrer',
};

function useFetch(url, options, dependencies) {
  const [response, setResponse] = useSafeState(null);
  const [loading, setLoading] = useSafeState(false);
  const [error, setError] = useSafeState(null);

  useEffect(
    debounce(() => {
      // To avoid send a request multiple times in a short time
      const send = async () => {
        // To transform async requests to sync
        setLoading(true);
        try {
          const response = await fetch(
            url,
            Object.assign(DEFAULT_OPTIONS, options)
          );
          const json = await response.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };

      send();
    }),
    [url, ...dependencies]
  );

  return [response, loading, error];
}

export default useFetch;
