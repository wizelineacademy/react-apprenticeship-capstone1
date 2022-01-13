import React from 'react';

import './IconButton.styles.scss';

function IconButton(props) {
  return (
    <button
      data-testid={props["data-testid"]}
      type="button"
      className={'icon-button ' + props.className}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}

IconButton.defaultProps = {
  "data-testid": 'icon-button',
  icon: null,
  onclick: null,
  className: '',
};

export default IconButton;
