import React from 'react';
import { useParams } from 'react-router';
import VideosGrid from '../../components/ListVideos/VideosGrid.component';
import { useAuth } from '../../providers/Auth';
import { VideoPlayCard, VideoPlayContainer, VideoPlayContent } from '../../theme/pages/Videos/Videos.styles.js';

function VideoPlay() {
    //const [ video, setVideo] = useState({});
    const { videos } = useAuth();
    const { videoId } = useParams();
    console.log(videoId);
    const video = videos.find( element => element.id === videoId );
    //const hero = useMemo(() => getHeroeById(Id), [heroeId]);
    console.log(video);
    return (
        <VideoPlayContainer>
            <div>
                <VideoPlayCard>
                    <iframe 
                            title="wizeline video"
                            height={400} 
                            src={`https://www.youtube.com/embed/${videoId}`} 
                            allowFullScreen 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                </VideoPlayCard>
                <VideoPlayContent>
                {/*
                    <p>{video.title}</p>
                    <p>{video.description}</p>
                */
                }
                </VideoPlayContent>
            </div>
                <VideosGrid />
        </VideoPlayContainer>
    )
}

export default VideoPlay;