import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'

function VideoDetails() {
  const { videoid } = useParams()
  const { search } = useLocation()
  const videoParams = new URLSearchParams(search)

  const Key = 'AIzaSyD-7zEJzuJBi-0Dm2exCgOihSx0NklLcgM'
  const axiosCliente = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 15,
      key: Key,
      type: 'video',
    },
  })

  useEffect(() => {
    const fecthAPI = async () => {
      try {
        const response = await axiosCliente.get(
          `/search?relatedToVideoId=${videoid}`
        )
        console.log(response.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    fecthAPI()
  }, [])
  console.log(videoid)

  return (
    <div>
      DEtellaes
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoid}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default VideoDetails
