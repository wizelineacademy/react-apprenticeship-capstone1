import React from 'react';

import './Switch.styles.scss';

function Switch(props) {
  return (
    <label data-testid={props.testId} className={'switch ' + props.className}>
      <div className="switch__block">
        <input
          className="switch__input"
          type="checkbox"
          checked={props.value}
          onChange={props.onChange}
        />
        <span className="switch__slider"></span>
      </div>
      {props.label}
    </label>
  );
}

Switch.defaultProps = {
  testId: 'switch',
  className: '',
  label: '',
  value: false,
  onChange: () => {},
};

export default Switch;
