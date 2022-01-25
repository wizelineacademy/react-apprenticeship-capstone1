import React, { useContext } from 'react';
import HomeVideoGrid from '../../components/HomeVideoGrid/HomeVideoGrid.component';
import { StoreContext } from '../../utils/store/store-context';

import classes from './Home.module.css';

const HomePage = () => {
  const { searchParamTitle } = useContext(StoreContext);

  return (
    <section className={classes['home-container']}>
      <h1>{searchParamTitle}</h1>
      <HomeVideoGrid />
    </section>
  );
};

export default HomePage;
