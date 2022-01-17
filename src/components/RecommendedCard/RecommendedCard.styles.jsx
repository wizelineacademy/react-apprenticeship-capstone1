import styled from 'styled-components';

const CardContainer = styled.div`
  width: calc(100% - 16px);
  display: flex;
  min-height: 100px;
  height: auto;
  align-items: center;
  background: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 200px;
`;

const VideoContainer = styled(TextContainer)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.p`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 16px;
  color: #e64398;
  font-weight: 600;
  padding: 16px;
`;
const Description = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: ##41b3a3;
  padding: 16px;
`;

export { CardContainer, Title, VideoContainer, Description, TextContainer };
