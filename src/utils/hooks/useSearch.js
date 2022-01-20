import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { initialData } from '../mocks';
import { Context } from '../../context';
import useFetch from './useFetch';

const useSearch = () => {
  const history = useHistory();
  const [serchedValue, setSearchedValue] = useState('');
  const [serchedData, setSearchedData] = useState(initialData.items);
  const { state, dispatch } = useContext(Context);
  const { fetchData, response } = useFetch();
  let controller = new AbortController();

  const handleReponse = (responseStatus) => {
    try {
      if (responseStatus === 'updating') {
        if (response && response.items) {
          setSearchedData(response.items);
          dispatch({
            type: 'SAVE_ALL_DATA',
            payload: {
              ...state,
              response,
              serchedValue,
            },
          });
          const params = new URLSearchParams();
          if (history.location.pathname !== '/') {
            params.append('name', 'newSearch');
          }
          history.push({ search: params.toString() });
        } else {
          setSearchedData([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleReponse('firstLoad');
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleReponse('updating');
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, [response]);

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchedValue(value);
    if (event.key === 'Enter') {
      fetchData(serchedValue, 50);
    }
  };

  const handleDetails = (id, item) => {
    dispatch({
      type: 'SAVE_SELECTED_VIDEO',
      payload: {
        ...state,
        selectedVideo: {
          ...item,
          favorited: false,
        },
      },
    });
    history.push(`/details/${id}`);
  };

  return { handleSearch, serchedData, serchedValue, handleDetails };
};

export default useSearch;
