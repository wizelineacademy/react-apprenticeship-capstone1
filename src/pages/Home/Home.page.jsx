import React from "react";
import HomeVideoGrid from "../../components/HomeVideoGrid/HomeVideoGrid.component";

import classes from './Home.module.css'

const HomePage = (props) => {
    return (
        <section className={classes['home-container']}>
            <h1>Recommended for you</h1>
            <HomeVideoGrid videoList={props.videoList}/>
        </section>
    )
}

export default HomePage;