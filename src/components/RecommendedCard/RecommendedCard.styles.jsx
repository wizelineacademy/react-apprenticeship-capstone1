import styled from 'styled-components';

const CardContainer = styled.div`
  width: calc(100 - 16px);
  display: flex;
  min-height: 100px;
  height: auto;
  align-items: center;
  background: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 16px;
  border-radius: 10px;
`;
const VideoContainer = styled.div`
  width: 50%;
  height: 200px;
  background: lightgray;
`;

const Title = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: #41b3a3;
  font-weight: 600;
  padding: 16px;
`;

export { CardContainer, Title, VideoContainer };
