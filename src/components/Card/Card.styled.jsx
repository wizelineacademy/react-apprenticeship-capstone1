import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 700px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 18px;
  display: flex;
  align-items: center;
  background-color: #eefbfc;
  height: 200px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 8px;
    height: 190px;
  }
  p {
    font-size: 12px;
    margin-right: 5px;
    margin-top: 0;
  }
  h5 {
    margin: 10px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 12px;
    }
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
  #youtube {
    font-size: 2.5rem;
    color: red;
  }
  .favorite {
    font-size: 2rem;
    color: #cdd2d4;
  }

  .on {
    color: #ffb703;
  }
`;
