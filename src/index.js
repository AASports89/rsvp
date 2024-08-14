import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "aos/dist/aos.css";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();