import React from 'react'
import './Grid.styles.css'

import Single from './Single';

function Grid({ items }) {
    const renderList = () => {
        return items.map((item, index) => (
          <Single key={index} item={item}/>
        ));
      }
    return (
        <div className='row'>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default Grid
