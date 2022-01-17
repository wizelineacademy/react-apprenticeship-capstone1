import React from 'react';
import { Link } from 'react-router-dom';
import { VideoItemCard, VideoItemContent } from '../../theme/components/ListVideos/ListVideos.styles.js';

const VideoItem = ({video}) => {

    function handleStartVideo (){
        console.log('hola');
    }
    
    return (
        <VideoItemCard  
            style={{width: video.width}}
        >
            <div>
                <Link to={`./${video.id}`}>
                    <img 
                        onClick={handleStartVideo}
                        width={video.width}
                        height={video.height} 
                        src={video.url}    
                        alt="video"  
                        />
                
                </Link>
            </div>
            <VideoItemContent>
                {video.title}
                {video.description}
            </VideoItemContent>
        </VideoItemCard>
    )
};

export default VideoItem;

/*
<div className=' video-item item'>
<img className='ui image' src={} alt={}/>
<div className='content'>
    <div className='header '>{}</div>
</div>
</div>
*/