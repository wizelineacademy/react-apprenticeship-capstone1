import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.styles.scss';
import DefaultAvatar from './2D_logo_red.svg';

function Sidebar(props) {
    let [selectedTab, setSelectedTab] = useState('home');

    const onTabSelected = (tab) => {
        if (selectedTab !== tab)
            setSelectedTab(tab);
    };

    return (
        <div className={"sidebar " + props.className}>
            <div className='sidebar__user-info-container'>
                <img src={DefaultAvatar} alt="User's avatar" className='sidebar__avatar-image'/>
                <h3>Username</h3>
            </div>

            <div 
                className={'sidebar__tab ' +  (selectedTab === 'home' ? 'sidebar__tab--selected' : '')} 
                onClick={() => onTabSelected('home')}>
                <FontAwesomeIcon icon={['fas', 'home']} size="2x" />
                <h3>Home</h3>
            </div>

            <div
                className={'sidebar__tab ' +  (selectedTab === 'favorites' ? 'sidebar__tab--selected' : '')} 
                onClick={() => onTabSelected('favorites')}>
                <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
                <h3>Favorites</h3>
            </div>
            <div className='sidebar__item sidebar__link'>
                <h3>Login</h3>
            </div>
        </div>
    );
}

Sidebar.defaultProps = {
    className: "",
}

export default Sidebar;