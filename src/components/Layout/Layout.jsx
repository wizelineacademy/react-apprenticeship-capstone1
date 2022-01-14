import React from 'react';

import { StyledLayout } from './Layout.styles.jsx';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return <StyledLayout> {children}</StyledLayout>;
}

export default Layout;
