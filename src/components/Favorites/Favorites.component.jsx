import React from "react";

import classes from './Favorites.module.css';

const Favorites = (props) => {

    return (
        <div className={`${classes['favorites-container']} ${props.isOpen && classes.active}`  }>
            <h3>Favorites</h3>
            <button onClick={props.onClose}>Close</button>
        </div>
    ) 
}

export default Favorites;