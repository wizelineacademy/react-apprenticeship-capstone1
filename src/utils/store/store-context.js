import React, { useState } from 'react';

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [selectedVideoData, setSelectedVideoData] = useState(null);
  const [videoList, setVideoList] = useState({});
  const [relatedVideoList, setRelatedVideoList] = useState({});
  const [searchParamTitle, setSearchParamTitle] = useState('');

  const storeStates = {
    selectedVideoData,
    setSelectedVideoData,
    videoList,
    setVideoList,
    searchParamTitle,
    setSearchParamTitle,
    relatedVideoList,
    setRelatedVideoList,
  };

  return (
    <StoreContext.Provider value={storeStates}>
      {children}
    </StoreContext.Provider>
  );
};
