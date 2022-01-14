import React from 'react'
import './Header.styles.css';

function Header() {
    return (
        <div className='header'>
            <button>Menu</button>
            <div className='header-input'>
                <svg width='20' height='20'></svg>
                <input placeholder='Search...' type='text' onChange={() => {}} />
            </div>
            <div className='right-container'>
                <label className='switch'>
                    <input type="checkbox"></input>
                    <span className='slider round'></span>
                </label>
                <span className='span-text'>Dark mode</span>
                <button>login</button>
            </div>
        </div>
    )
}

export default Header
