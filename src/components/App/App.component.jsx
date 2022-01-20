import React, {useState, useEffect} from "react";
import {Switch, Route } from "react-router-dom";

import Header from "../Layout/Header/Header";
import MainContainer from "../Layout/MainContainer/MainContainer";

import Favorites from "../Favorites/Favorites.component";
import Login from  "../Login/Login.component";

import HomePage from "../../pages/Home";


const App = () => {

    const [favsIsOpen, setFavsIsOpen] = useState(false);
    const [loginIsOpen, setLoginIsOpen] = useState(false);
    const [videos, setVideos] = useState({});

    const favoritesToggle = () => {
        setFavsIsOpen(!favsIsOpen);
    }

    const loginToggle = () => {
        setLoginIsOpen(!loginIsOpen);
    }

    useEffect(()=>{

        const fetchVideos = async() => {

            const response = await fetch('mockService.json');
            const data = await response.json();
            const transformedVideos = data.items.map(videoData => {
                return {
                    id: videoData.id.videoId ? videoData.id.videoId : videoData.id.channelId,
                    title: videoData.snippet.title,
                    description: videoData.snippet.description,
                    thumbnail: videoData.snippet.thumbnails.medium.url
                }
            })

            setVideos(transformedVideos);
         
        }

        fetchVideos();
        
    },[])

    let homeContent = <p>Content not found</p>

    if(videos.length > 0){
        homeContent = <HomePage videoList={videos}/>;
    }

    return (
        <> 
            <Header onFavoritesToggle={favoritesToggle} onLoginToggle={loginToggle}/> 
            <Favorites isOpen={favsIsOpen} onClose={favoritesToggle}/>
            {loginIsOpen && <Login onClose={loginToggle}/>}
            <MainContainer>
                <Switch>
                    <Route exact path="/">
                        {homeContent}
                    </Route>
                </Switch>
            </MainContainer>
        </>
    );
}

export default App;