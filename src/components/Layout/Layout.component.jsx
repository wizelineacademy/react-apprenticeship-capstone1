import React, { useState } from 'react';

import './Layout.styles.scss';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

function Layout(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div data-testid={props['data-testid']} className="layout">
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
