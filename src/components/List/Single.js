import React from 'react'

import './Single.styles.css'
import NotFound from '../../assets/NotFound.png'

function Single({ item }) {
    return (
        <div className='single-container'>
            <div className='thumbnail'>
                <img src={item.snippet ? item.snippet.thumbnails.high.url : NotFound} alt={item.snippet ? item.snippet.title : NotFound}></img>
            </div>
            <div className='info'>
                <h2>{item.snippet ? item.snippet.title : "Title not found"}</h2>
                <p>{item.snippet ? item.snippet.description : "Description not found :'("}</p>
            </div>
        </div>
    )
}

export default Single
