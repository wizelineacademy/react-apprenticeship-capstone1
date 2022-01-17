import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import { AuthContext } from "../auth/AuthContext";
//import { LoginScreen } from "../components/login/LoginScreen";

import AuthProvider from '../providers/Auth';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import NotFound from '../pages/NotFound';
import SecretPage from '../pages/Secret';
import Layout from "../components/Layout";
import Private from "../components/Private";
import PublicRoute from "./routes/PublicRoutes/PublicRoute.route";
import PrivateRoute from "./routes/PrivateRoutes/PrivateRoute.route";
import Navbar from "../components/Ui/Navbar.component";
import VideoPlay from "../pages/Videos/VideoPlay.page";
//import VideoPlay from '../../pages/Videos';


//import { DashboardRoutes } from "./DashboardRoutes";
//import { PrivateRoute } from "./PrivateRoute";
//import { PublicRoute } from "./PublicRoute";

function AppRouter() {
    
    //const {user} = useContext(AuthContext);

    return (
        
        <Router>
            <AuthProvider>
            <Navbar/>
                <Layout>
                <Switch>
                    <PublicRoute 
                        exact
                        path="/" 
                        component={ HomePage } 
                        isAuthenticated={false}
                    />
                        {/**
                         <VideoPlay/>
                        <HomePage />
                        */
                        }
                    <PublicRoute 
                        exact
                        path="/:videoId" 
                        component={ VideoPlay } 
                        isAuthenticated={false}
                    />
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={LoginPage}
                        isAuthenticated={false}
                    />
                    <PrivateRoute 
                        exact 
                        path="/secret" 
                        component={SecretPage}
                        isAuthenticated={true}
                    />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    )
}

export default AppRouter;
