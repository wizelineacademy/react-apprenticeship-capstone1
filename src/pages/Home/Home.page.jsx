// Components
import React from 'react'
import { HomeContainer, HomeSubheader } from './Home.styled'
import ItemList from '../../components/ItemList'

// Utils
/* import { useAuth } from '../../providers/Auth' */

// MockData
import data from '../../utils/MockData.json'

function HomePage() {
  return (
    <HomeContainer>
      <HomeSubheader>Welcome to Wize Tube!</HomeSubheader>
      <ItemList items={data.items} />
    </HomeContainer>
  )
}

export default HomePage
