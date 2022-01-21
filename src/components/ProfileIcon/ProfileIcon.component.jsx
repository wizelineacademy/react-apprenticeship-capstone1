import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

import styles from './ProfileIcon.module.scss';

const ProfileIcon = () => {
  const handleOnClick = () => {
    console.log('click');
  };

  return (
    <div>
      <button
        aria-label="loginIcon"
        className={styles.headerBtnLogin}
        onClick={handleOnClick}
      >
        <BsFillPersonFill style={{ width: '22px', height: '22px' }} />
      </button>
    </div>
  );
};

export default ProfileIcon;
