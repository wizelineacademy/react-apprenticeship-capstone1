import React from 'react';

import './Layout.styles.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
