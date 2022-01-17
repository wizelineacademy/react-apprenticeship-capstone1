import React from 'react';
import { useAuth } from '../../providers/Auth';
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