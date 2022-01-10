import React, { useEffect, useState } from "react";
import { Container, Col } from 'react-bootstrap'
import { MockService } from '../../utils/MockService'
import VideoList from "../../components/VideoList"
import styled from 'styled-components'

const HeadingH2 = styled.h2`
text-align:center;
margin:auto;
`
function HomeView() {




  const [videos, setVideos] = useState([])
  useEffect(() => {

    let { items } = MockService.GetMock()
    setVideos(items)

  }, [videos])

  return (
  <Container>
    <Col xs={12} md={12} ></Col>
    <HeadingH2>Welcome</HeadingH2>
    {videos.length !== 0 ? <VideoList videos={videos}></VideoList> : null}

  </Container>)
}

export default HomeView;