import styled from 'styled-components';

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  section > div {
    display: flex;
  }
  .iframe {
    margin: 10px 20px;
  }
  .video-data {
    margin: 0 20px;
    p,
    h3 {
      margin: 0;
    }
  }
  .favorite {
    font-size: 2rem;
    color: #cdd2d4;
  }

  .on {
    color: #ffb703;
  }
`;