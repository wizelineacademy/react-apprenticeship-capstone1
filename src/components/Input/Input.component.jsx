import React, { useState } from 'react';

import './Input.styles.scss';

function Input(props) {
  let [focus, onFocusChange] = useState(false);

  return (
    <div
      className={
        'input-component ' +
        (focus ? 'input-component--focus' : '') +
        props.className
      }
    >
      <label className="input-component__label">{props.label}</label>
      <input
        type={props.type}
        className="input-component__input"
        onFocus={() => onFocusChange(true)}
        onBlur={() => onFocusChange(false)}
        onChange={(event) => props.onChange(event.target.value)}
        value={props.value}
      />
    </div>
  );
}

Input.defaultProps = {
  className: '',
  label: '',
  type: 'text',
  value: '',
  onChange: () => {},
};

export default Input;
