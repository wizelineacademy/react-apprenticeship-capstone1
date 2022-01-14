import React, { useState } from 'react';

import './Input.styles.scss';

function Input(props) {
  let [focus, onFocusChange] = useState(false);

  return (
    <div
      data-testid={props['data-testid']}
      className={
        'input-component ' +
        (focus ? 'input-component--focus' : '') +
        props.className
      }
    >
      <label className="input-component__label">
        {props.label}
        <input
          type={props.type}
          className="input-component__input"
          onFocus={() => onFocusChange(true)}
          onBlur={() => onFocusChange(false)}
          onChange={(event) => props.onChange(event.target.value)}
          value={props.value}
        />
      </label>
    </div>
  );
}

Input.defaultProps = {
  'data-testid': 'input-component',
  className: '',
  label: '',
  type: 'text',
  value: '',
  onChange: () => {},
};

export default Input;
