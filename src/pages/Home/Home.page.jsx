// Components
import React, { useEffect, useState, useContext } from 'react'
import { HomeContainer, HomeSubheader } from './Home.styled'
import ItemList from '../../components/ItemList'
import axiosClient from '../../utils/axiosClient'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  const [youtubeItems, setYoutubeItems] = useState([])
  const [loading, setLoading] = useState(false)

  // Use Context
  const { searchParam } = useContext(GlobalContext)

  // Functions
  useEffect(() => {
    const fecthAPI = async () => {
      try {
        setLoading(true)
        const response = await axiosClient.get(`/search?q=${searchParam}`)
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
    '...Loading'
  ) : (
    <HomeContainer>
      <HomeSubheader>Welcome to Wize Tube!</HomeSubheader>
      <ItemList items={youtubeItems} />
    </HomeContainer>
  )
}

export default HomePage
