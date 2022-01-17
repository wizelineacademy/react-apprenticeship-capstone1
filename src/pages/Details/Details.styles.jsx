import styled from 'styled-components';

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  min-height: 100vh;
`;
const VideoContainer = styled.div`
  width: 70%;
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
const FavoriteButton = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1.5px;
  color: white;
  svg {
    margin-top: 6px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: dodgerblue;
  }
`;
const ListVideosContainer = styled.ul`
  width: 30%;
  display: flex;
  height: auto;
  min-height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(
    184deg,
    rgba(190, 112, 236, 0.5032387955182073) 3%,
    rgba(51, 51, 51, 0.39959733893557425) 36%,
    rgba(51, 51, 51, 0.4780287114845938) 56%,
    rgba(0, 0, 0, 0.36878501400560226) 70%,
    rgba(0, 212, 255, 0.30155812324929976) 100%
  );
  padding: 24px;
  margin: 12px;
  border-radius: 10px;
`;
const Information = styled.div`
  width: calc(100% - 32px);
  height: auto;
  min-height: 200px;
  background: #333333;
  padding: 24px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export {
  DetailsContainer,
  VideoContainer,
  Video,
  ListVideosContainer,
  Information,
  FavoriteButton,
  TitleContainer,
};
