import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import { useAuth } from '../../providers/Auth';
import getVideoById from '../../selectors/getVideoById';
import getVideos from '../../selectors/getVideos';
import { VideosGridContainer } from '../../theme/pages/Videos/Videos.styles';


import VideosList from './VideosList';

function VideosGrid({setCategory}) {
    
    const { videos } = useAuth();

    return(   
        <VideosGridContainer>
            <VideosList videos = {videos}/>
        </VideosGridContainer>         
    )
}

export default VideosGrid;