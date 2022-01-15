// Modules
import React from 'react'
import RelatedVideos from '../RelatedVideos'
import { VideoComponentContainer } from './VideoComponent.styled'

function VideoComponent({ video, relatedVideos }) {
  return (
    <VideoComponentContainer>
      <div className="iframe-container">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <h3>{video?.snippet?.title}</h3>
        <p>{video?.snippet?.description}</p>
      </div>
      <div className="related-list">
        <RelatedVideos related={relatedVideos} />
      </div>
    </VideoComponentContainer>
  )
}

export default VideoComponent
