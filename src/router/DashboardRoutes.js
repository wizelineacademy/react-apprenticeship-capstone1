import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import HomePage from '../pages/Home/Home.page'
import VideoPlay from '../pages/Videos/VideoPlay.page'

export const DashboardRoutes = () => {
    return (
        <>  
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomePage }/>
                    <Route exact path="/video/:videoId" component={ VideoPlay }/>
                    <Route exact path="/favorites" component={ VideoPlay }/>

                    <Redirect to="/home" />
                    
                </Switch>
            </div>  
        </>
    )
}
