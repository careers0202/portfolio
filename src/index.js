import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Parent from './App'; // default export

// import { App } from './App'; // named export

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('demo')
);