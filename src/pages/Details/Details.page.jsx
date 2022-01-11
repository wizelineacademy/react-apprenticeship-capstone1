import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import {
  DetailsContainer,
  VideoContainer,
  Video,
  ListVideosContainer,
  Information,
  Comments,
} from '../Details/Details.styles';
import RecomendedCard from '../../components/RecommendedCard/Recommendedcard.component';

const DetailsPage = () => {
  const { authenticated } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };
  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage">
        {authenticated ? (
          <DetailsContainer>
            <VideoContainer>
              <Video />
              <Information>information</Information>
              <Comments>comments</Comments>
            </VideoContainer>
            <ListVideosContainer>
              {Array.from({ length: 20 }, () => (
                <RecomendedCard
                  title="title of recommended video"
                  videoContent=""
                />
              ))}
            </ListVideosContainer>
          </DetailsContainer>
        ) : (
          <Link to="/login">details videos, log here</Link>
        )}
      </section>
    </div>
  );
};

export default DetailsPage;
