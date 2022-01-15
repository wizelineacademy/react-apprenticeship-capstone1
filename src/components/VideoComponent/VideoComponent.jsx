// Modules
import React from 'react'
import RelatedVideos from '../RelatedVideos'
import { VideoComponentContainer } from './VideoComponent.styled'

function VideoComponent({ video, relatedVideos }) {
  return (
    <VideoComponentContainer>
      <div className="videoInfo-container">
        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
      <div className="related-list">
        <RelatedVideos related={relatedVideos} />
      </div>
    </VideoComponentContainer>
  )
}

export default VideoComponent
