import React from 'react';

import './Loader.styles.scss';

function Loader(props) {
  return (
    <div
      data-testid={props.testId}
      className={'loader ' + props.className}
    ></div>
  );
}

Loader.defaultProps = {
  testId: 'loader',
  className: '',
};

export default Loader;
