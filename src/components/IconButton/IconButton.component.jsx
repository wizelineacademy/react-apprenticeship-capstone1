import React from 'react';

import './IconButton.styles.scss';

function IconButton(props) {
  return (
    <button type="button" className={'icon-button ' + props.className}>
      {props.icon}
    </button>
  );
}

IconButton.defaultProps = {
  icon: null,
  onclick: null,
  className: '',
};

export default IconButton;
