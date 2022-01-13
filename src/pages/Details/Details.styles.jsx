import styled from 'styled-components';

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  min-height: 100vh;
`;
const VideoContainer = styled.div`
  width: 60%;
  display: flex;
  height: auto;
  min-height: 100vh;
  flex-direction: column;
`;
const Video = styled.div`
  width: calc(100% - 32px);
  margin: 12px;
  height: 550px;
  background: gray;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
const ListVideosContainer = styled.ul`
  width: 40%;
  display: flex;
  height: auto;
  min-height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(
    184deg,
    rgba(190, 112, 236, 0.5032387955182073) 3%,
    rgba(255, 255, 255, 1) 36%,
    rgba(240, 253, 255, 1) 56%,
    rgba(229, 251, 255, 1) 70%,
    rgba(0, 212, 255, 0.30155812324929976) 100%
  );
  padding: 8px;
  margin: 12px;
  border-radius: 10px;
`;
const Information = styled.div`
  width: calc(100% - 32px);
  height: auto;
  min-height: 200px;
  background: white;
  padding: 8px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const Comments = styled(Information)`
  height: auto;
  min-height: 400px;
`;

export {
  DetailsContainer,
  VideoContainer,
  Video,
  ListVideosContainer,
  Information,
  Comments,
};
