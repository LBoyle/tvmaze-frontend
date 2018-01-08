import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/normalize.css';
import './styles/skeleton.css';

ReactDOM.render(
  <Router history={createBrowserHistory(this.props)}>
    <App />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
