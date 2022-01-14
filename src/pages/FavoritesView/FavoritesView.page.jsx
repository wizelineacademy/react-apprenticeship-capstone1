import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import VideoList from "../../components/VideoList";
import { storage } from "../../utils/storage";
import appContext from "../../context/appContext";


function FavoritesView() {
    const [favoriteVideos, setFavoriteVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const [displayVideo, setDisplayVideo] = useState(false);
    const thisContext = useContext(appContext);
    const { styles, userProps, isLogged } = thisContext;

    const handleSelectVideo = (video) => {
        setSelectedVideo(video);
        setDisplayVideo(true);
    };

    const handleDisplay = () => {
        setDisplayVideo(false);
    };


    useEffect(() => {
        try {
            const item = storage.get(userProps.id)
            console.log(userProps.id)
            console.log(item)
            if (item !== null) {
                console.log(item)
                setFavoriteVideos(item)
            }

        }
        catch (err) {
            setFavoriteVideos([])
        }
    }, [])




    return (
        <Container style={{ paddingBottom: '5%' }}>
            <Col xs={12} sm={12} md={12}>
            {favoriteVideos.length == 0 ?
                            <EmptyVideos></EmptyVideos>
                            : <VideoList videos={favoriteVideos}  handleSelectVideo={handleSelectVideo} styles={styles} userId></VideoList>
                        }
            </Col>
        </Container>
    )
}

const EmptyVideos = () => {
    return (
        <div styles={{ width: '60%' }}>
            <h2>No videos added to favorites yet</h2>
            <Link to="/">Start searching for new!</Link>
        </div>
    )

}

export default FavoritesView;