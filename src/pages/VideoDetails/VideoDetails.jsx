// Modules
import React, { useEffect, useState, useContext } from 'react'
import axiosClient from '../../utils/axiosClient'
import { useParams } from 'react-router-dom'
import VideoComponent from '../../components/VideoComponent/VideoComponent'

function VideoDetails() {
  // videoId param to search the video
  const { videoid } = useParams()

  const [videoDetailed, setVideoDetailed] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fecthAPI = async () => {
      try {
        setLoading(true)
        const videoDetails = await axiosClient.get(`/search?q=${videoid}`)
        const relatedVideos = await axiosClient.get(
          `/search?relatedToVideoId=${videoid}`
        )
        setRelatedVideos(relatedVideos.data.items)
        setVideoDetailed(videoDetails.data.items[0])
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fecthAPI()
  }, [])
  console.log(videoid)

  return loading || !videoDetailed ? (
    '..Loading'
  ) : (
    <div>
      <VideoComponent video={videoDetailed} />
    </div>
  )
}

export default VideoDetails
