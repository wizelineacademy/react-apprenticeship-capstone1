// Modules
import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/axiosClient'
import { useParams } from 'react-router-dom'
import VideoComponent from '../../components/VideoComponent/VideoComponent'
import { VideoDetailsContainer } from './VideoDetails.styled'

function VideoDetails() {
  // videoId param to search the video
  const { videoid } = useParams()

  const [videoDetailed, setVideoDetailed] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(false)

  // Functions
  useEffect(() => {
    const fecthAPI = async () => {
      try {
        setLoading(true)
        const videoDetails = await axiosClient.get(`/search?q=${videoid}`)
        const relatedVideos = await axiosClient.get(
          `/search?relatedToVideoId=${videoid}`
        )
        console.log(videoDetails.data.items[0])
        setRelatedVideos(relatedVideos.data.items)
        setVideoDetailed(videoDetails.data.items[0])
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fecthAPI()
  }, [videoid])

  return loading || !videoDetailed || relatedVideos.length < 0 ? (
    '..Loading'
  ) : (
    <VideoDetailsContainer>
      <VideoComponent video={videoDetailed} relatedVideos={relatedVideos} />
    </VideoDetailsContainer>
  )
}

export default VideoDetails
