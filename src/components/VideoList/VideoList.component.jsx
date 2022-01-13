import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import './VideoList.styles.css';

const Title = styled.div`
  margin: auto;
  padding: 2%;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;
const Description = styled.div`
  margin: auto;
  padding: 2%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 200;
  line-height: 1.6;
  color: gray;
`;

const VideoThumbnail = styled.img`
  height: 150px;
  object-fit: cover;
`;

const CustomCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 30vh;
  margin: 5%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

function VideoList({ videos }) {
  return (
    <Row>
      {videos.map((video) => {
        return (
          <Col
            key={video.id.videoId}
            xs={12}
            sm={6}
            md={3}
            className="card-container"
          >
            <CustomCard>
              <VideoThumbnail
                src={video.snippet.thumbnails.medium.url}
                data-testid="header-component-thumbnail"
              ></VideoThumbnail>
              <Title>{video.snippet.title}</Title>
              <Description>{video.snippet.description}</Description>
            </CustomCard>
          </Col>
        );
      })}
    </Row>
  );
}
export default VideoList;
