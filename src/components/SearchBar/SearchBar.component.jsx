import React from 'react';

import './SearchBar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@components/IconButton';

function SearchBar(props) {
    return (
        <div className={"search-container " + props.className}>
            <form action="" className='search-container__form'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    name="search-bar" 
                    className='search-container__input' 
                    onFocus={() => props.onFocusChange(true)}
                    onBlur={() => props.onFocusChange(false)} />
                <IconButton icon={<FontAwesomeIcon icon={['fas', 'search']} size='1x' />} className='search-container__button'/>
            </form>
        </div>
    );
}

SearchBar.defaultProps = {
    className: "",
    onFocusChange: null
}

export default SearchBar;