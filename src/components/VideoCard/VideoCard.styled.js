import styled from 'styled-components';

const VideoCardStyled = styled.article`
  height: auto;
  padding: 0;
  max-width: 350px;
  flex: 0 0 350px;
  margin: 12px;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (max-width: 370px) {
    flex: 0 0 90vw;
  }
`;

const VideoThumbnail = styled.img`
  border-radius: 0.3rem 0.3rem 0 0;
  border: none;
  height: auto;
  max-height: 250px;
  overflow: hidden;
  width: 100%;
  src: url(${(props) => props.src});
`;

const VideoTitle = styled.h4`
  margin: 0.5rem 0;
  padding: 0 8px;
  font-weight: 600;
`;

const VideoDescription = styled.p`
  padding: 0 8px;
  font-weight: 300;
  font-size: 0.8rem;
`;

export { VideoCardStyled, VideoThumbnail, VideoTitle, VideoDescription };
