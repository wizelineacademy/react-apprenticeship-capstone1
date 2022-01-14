// Modules
import React from 'react'
import { MainLayout } from './Layout.styled'
import NavBar from '../NavBar'

function Layout({ children }) {
  return (
    <MainLayout>
      <NavBar />
      {children}
    </MainLayout>
  )
}

export default Layout
