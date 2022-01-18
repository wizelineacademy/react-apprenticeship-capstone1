import React, { useContext } from 'react';
import { DarkMode, LigthMode } from './Layout.styles.jsx';
import { AppContext } from '../Context/AppContext';

function Layout({ children }) {
  const { toggleTheme } = useContext(AppContext);
  console.log(toggleTheme);
  const component = toggleTheme ? (
    <DarkMode>{children}</DarkMode>
  ) : (
    <LigthMode>{children}</LigthMode>
  );
  return component;
}

export default Layout;
