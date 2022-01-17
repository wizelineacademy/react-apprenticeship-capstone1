import styled from 'styled-components';

const VideoRecommendationsContainer = styled.div`
  width: 20vw;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden scroll;
  height: 90vh;

  @media (max-width: 850px) {
    width: 100%;
    height: fit-content;
    overflow: unset;
    align-items: center;
  }
`;

export { VideoRecommendationsContainer };
