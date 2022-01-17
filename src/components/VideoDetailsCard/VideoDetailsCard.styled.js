import styled from 'styled-components';

const VideoDetailsCardStyled = styled.div`
  width: 60vw;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const VideoDetailsIframe = styled.iframe`
  width: 100%;
  height: 40vh;
`;

export { VideoDetailsIframe, VideoDetailsCardStyled };
