import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Switch from '../Switch';
import ProfileIcon from '../ProfileIcon';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import styles from './Header.module.scss';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className={styles.header}>
      <section>
        <button
          aria-label="menu"
          className={styles.headerBtnNav}
          onClick={handleToggleNavbar}
        >
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '24px', height: '24px' }} />
          ) : (
            <FiMenu style={{ color: '#fff', width: '24px', height: '24px' }} />
          )}
        </button>
        <SearchBar />
      </section>
      <section>
        <Switch
          darkMode={darkMode}
          onColor="#EF476F"
          handleToggle={() => setDarkMode(!darkMode)}
        />
        <ProfileIcon />
      </section>
    </header>
  );
}

export default Header;
