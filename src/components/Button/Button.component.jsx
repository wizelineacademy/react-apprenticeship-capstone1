import React from 'react';

import './Button.styles.scss';

function Button(props) {
  return (
    <button
      data-testid={props.testId}
      className={'button ' + props.className}
      type={props.type}
      onClick={props.onClick}
    >
      <h4>{props.text}</h4>
    </button>
  );
}

Button.defaultProps = {
  testId: 'button',
  className: '',
  text: '',
  onClick: null,
  type: 'button',
};

export default Button;
