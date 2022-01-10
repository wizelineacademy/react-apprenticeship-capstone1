import React from 'react'
import { MainLayout } from './Layout.styled'
import NavBar from '../NavBar'

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <MainLayout>
      <NavBar />
      {children}
    </MainLayout>
  )
}

export default Layout
