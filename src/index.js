import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './components/App';
import Navbar from './components/Ui/Navbar.component';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
