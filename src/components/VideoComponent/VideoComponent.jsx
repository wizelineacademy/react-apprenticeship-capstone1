import React from 'react'
import RelatedVideos from '../RelatedVideos'

function VideoComponent(video, relatedVideos) {
  const videoInfo = video.video
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoInfo.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <h3>{videoInfo.snippet.title}</h3>
      <p>{videoInfo.snippet.description}</p>

      <RelatedVideos />
    </div>
  )
}

export default VideoComponent
