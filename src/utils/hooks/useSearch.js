import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import initialData from '../mocks';
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
        } else {
          setSearchedData([]);
        }
      }
      if (responseStatus === 'firstLoad') {
        //TODO: Change when deploy to not loose request.
        //fetchData('', 15);
        console.log('here will get some random videos');
        if (response && response.items) setSearchedData(response.items);
        else {
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
  }, []);

  useEffect(() => {
    handleReponse('updating');
    return () => {
      controller.abort();
    };
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
