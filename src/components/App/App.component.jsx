import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Providers
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
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
