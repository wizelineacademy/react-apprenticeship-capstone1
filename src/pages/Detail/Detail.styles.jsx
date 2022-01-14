import styled from 'styled-components';

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
`;
