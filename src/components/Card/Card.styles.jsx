import styled from 'styled-components';

const CardContainer = styled.div`
  width: calc(100% / 4);
  display: flex;
  min-height: 280px;
  height: auto;
  flex-direction: column;
  align-items: center;
  background: ;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 16px 8px;
  overflow: scroll;
`;
const VideoContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.p`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 12px;
  color: #41b3a3;
  font-weight: 600;
  padding: 4px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  color: #e64398;
  padding: 4px;
`;


export { CardContainer, Subtitle, Title, VideoContainer, VideoImage };
