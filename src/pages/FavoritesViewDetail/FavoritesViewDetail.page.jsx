import React, { useContext } from 'react';
import VideoDetail from '../../components/VideoDetail';
import appContext from '../../context/appContext';
function FavoritesViewDetail() {
  const thisContext = useContext(appContext);
  const { styles, userProps, isLogged } = thisContext;

  return (
    <VideoDetail
      styles={styles}
      selectedVideo={{}}
      userId={userProps.userId}
      isLogged={isLogged}
      handleDisplay={true}
    ></VideoDetail>
  );
}

export default FavoritesViewDetail;
