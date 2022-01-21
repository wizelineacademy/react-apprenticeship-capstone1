import React from 'react';

import classes from './MainContainer.module.css';

function MainContainer({ children }) {
  return <main className={classes['main-container']}>{children}</main>;
}

export default MainContainer;
