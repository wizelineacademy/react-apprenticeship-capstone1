import React from 'react';

import './BaseComponent.styles.scss';

function BaseComponent(props) {
  return <div className={' ' + props.className}></div>;
}

BaseComponent.defaultProps = {
  className: '',
};

export default BaseComponent;
