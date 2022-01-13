import styled from 'styled-components';

const VideoCardStyled = styled.article`
  background: transparent;
  height: auto;
  padding: 0;
  flex: 0 0 350px;
  margin: 12px;
  background: #efebf1;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (max-width: 370px) {
    flex: 0 0 90vw;
  }
`;

const VideoThumbnail = styled.img`
  border-radius: 0.3rem 0.3rem 0 0;
  border: none;
  background: #b5dec4;
  height: auto;
  max-height: 250px;
  overflow: hidden;
  width: 100%;
  src: url(${(props) => props.src});
`;

const VideoTitle = styled.h4`
  margin: 0.5rem 0;
  padding: 0 8px;
  color: #242323;
  font-weight: 600;
`;

const VideoDescription = styled.p`
  padding: 0 8px;
  color: #3a3a3a;
  font-weight: 300;
  font-size: 0.8rem;
`;

export { VideoCardStyled, VideoThumbnail, VideoTitle, VideoDescription };
