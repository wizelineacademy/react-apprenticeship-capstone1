import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Providers
import AuthProvider from '../../providers/Auth'
import { GlobalProvider } from '../../providers/Global/Global.provider'

// Pages
import HomePage from '../../pages/Home'
import NotFound from '../../pages/NotFound'
import Layout from '../Layout'
import VideoDetails from '../../pages/VideoDetails'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/:videoid">
                <VideoDetails />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
