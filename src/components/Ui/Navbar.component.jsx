import React, { useLayoutEffect, useState } from 'react';
import AddCategory from '../ListVideos/AddCategory.component';
import SwitchButton from './SwitchButton.component';
import { Link, NavLink} from 'react-router-dom'

import './Ui.styles.css';
import styled from 'styled-components';

//import { Link } from 'react-router-dom';

function Navbar() {
    const [categories, setCategory] = useState(['wizeline']);
    const [isToggle, setIsToggle] = useState(false); 
    
    function handleToggle() {
        setIsToggle((prevState) => !prevState);
    }

    return (
        <nav className="topnav">
            <div 
                className="navbar-toggle-menu"
                onClick={handleToggle}
            >
                <i className="fa fa-bars" />
            </div>

            <NavbarHead>
               <NavbarContent/>
            </NavbarHead>
            { isToggle && (
                <NavbarToggle>
                    <NavbarContent/>
                </NavbarToggle>
            )}
        </nav>
    );
}

const NavbarHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {    
        display: none;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
    }
      
`;

const NavbarToggle = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;


    @media screen and (max-width: 768px) {
        align-items: flex-end;
    }
`;

function NavbarContent() { 
    return (
        <>
            <Link 
                className = "navbar-text" 
                to="/"
            >
                <i className="fa fa-home" />
                    Home 
            </Link>
            <div>
                <NavbarContainer>
                    <NavLink 
                        activeClassName="active"
                        className="navbar-text"
                        exact 
                        to="/secret"
                    >
                        <i className="fa fa-star"/>
                        Favorites     
                    </NavLink>
                    <SwitchButton/>
                    <AddCategory/>
                    <NavLink 
                        activeClassName="active"
                        className="navbar-text"
                        exact 
                        to="/login"
                    >
                        <i className="fa fa-arrow-right" />
                        Login 
                    </NavLink>
                </NavbarContainer>
            </div>
        </>
    )
}

const NavbarContainer = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-top: 0px;
        align-items: flex-end;
    }      
`;

export default Navbar;
