import React from 'react';
import styles from './Switch.module.scss';

const Switch = ({ darkMode, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={darkMode}
        onChange={handleToggle}
        className={styles.headerSwitch}
        type="checkbox"
        id={`btnSwitch`}
      />
      <label
        style={{ background: darkMode && onColor }}
        className={styles.headerSwitchLabel}
        htmlFor={`btnSwitch`}
      >
        <span className={styles.headerSwitchButton} />
      </label>
      <span className={styles.headerSwitchText}>Dark mode</span>
    </>
  );
};

export default Switch;
