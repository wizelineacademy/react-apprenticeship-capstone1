import React, { useState } from 'react';

import './Layout.styles.scss';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

// eslint-disable-next-line react/prop-types
function Layout(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="layout">
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

export default Layout;
