import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 18px;
  display: flex;
  align-items: center;
  background-color: #f2edeb;
  height: 170px;

  p {
    font-size: 12px;
    margin-right: 5px;
    margin-top: 0;
  }
  h4 {
    margin: 10px;
  }
  img {
    margin: 0 8px;
    height: 100px;
    width: 110px;
  }
  #video-description {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
`;
