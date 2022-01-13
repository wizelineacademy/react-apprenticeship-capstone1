// Components
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { HomeContainer, HomeSubheader } from './Home.styled'
import ItemList from '../../components/ItemList'

import { GlobalContext } from '../../providers/Global/Global.provider'

const Key = 'AIzaSyATm1VJjxvNeMUh4il_02veDJPMmvZC4rg'

const axiosCliente = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: Key,
    type: 'video',
  },
})

function HomePage() {
  const [youtubeItems, setYoutubeItems] = useState([])
  const [loading, setLoading] = useState(false)

  const { searchParam } = useContext(GlobalContext)

  useEffect(() => {
    const fecthAPI = async () => {
      try {
        setLoading(true)
        const response = await axiosCliente.get(`/search?q=${searchParam}`)
        console.log(response.data.items)
        setYoutubeItems(response.data.items)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fecthAPI()
  }, [searchParam])

  return loading ? (
    '..Loading'
  ) : (
    <HomeContainer>
      <HomeSubheader>Welcome to Wize Tube!</HomeSubheader>
      <ItemList items={youtubeItems} />
    </HomeContainer>
  )
}

export default HomePage
