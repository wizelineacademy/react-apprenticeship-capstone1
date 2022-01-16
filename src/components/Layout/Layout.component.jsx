import React, { useEffect, useState } from 'react';

import './Layout.styles.scss';
import { useTheme } from '@providers/Theme';
import { sidebarStorage } from '@storages';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

function Layout(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(!!sidebarStorage.get());
  let [theme] = useTheme();

  useEffect(() => {
    sidebarStorage.set(isSideBarOpen);
  }, [isSideBarOpen]);

  return (
    <div
      data-testid={props['data-testid']}
      className={`layout ${theme.darkMode ? '--dark-mode' : ''}`}
    >
      <Header className="layout__header" setIsSideBarOpen={setIsSideBarOpen} />
      <div className="layout__content-container">
        <Sidebar
          className={isSideBarOpen ? 'sidebar--open ' : ''}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <main
          className={
            'layout__content ' + (isSideBarOpen ? 'layout__content--open ' : '')
          }
        >
          {props.children}
        </main>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  'data-testid': 'layout-component',
};

export default Layout;
