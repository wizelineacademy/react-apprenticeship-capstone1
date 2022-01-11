import styled from 'styled-components';

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  min-height: 100vh;
`;
const VideoContainer = styled.div`
  width: 75%;
  display: flex;
  height: auto;
  min-height: 100vh;
  flex-direction: column;
`;
const Video = styled.div`
  width: calc(100% - 32px);
  margin: 12px;
  height: 450px;
  background: gray;
`;
const ListVideosContainer = styled.ul`
  width: 25%;
  display: flex;
  height: auto;
  min-height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(
    184deg,
    rgba(236, 112, 176, 0.6881127450980392) 3%,
    rgba(255, 255, 255, 1) 36%,
    rgba(240, 253, 255, 1) 56%,
    rgba(229, 251, 255, 1) 70%,
    rgba(0, 212, 255, 0.5788690476190477) 100%
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
