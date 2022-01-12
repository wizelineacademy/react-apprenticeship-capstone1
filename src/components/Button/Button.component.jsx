import React from 'react';

import './Button.styles.scss';

function Button(props) {
  return (
    <button
      className={'button ' + props.className}
      type={props.type}
      onClick={props.onClick}
    >
      <h4>{props.text}</h4>
    </button>
  );
}

Button.defaultProps = {
  className: '',
  text: '',
  onClick: null,
  type: 'button',
};

export default Button;
