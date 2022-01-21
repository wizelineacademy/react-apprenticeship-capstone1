import React from 'react';
import Header from '../Header';

import styles from './Layout.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.container}>{children}</main>;
    </div>
  );
}

export default Layout;
