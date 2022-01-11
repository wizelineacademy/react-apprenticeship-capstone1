import React from 'react';
import ReactDOM from 'react-dom';

import App from '@components/App';
import '@style/normalize.css';
import '@style/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
