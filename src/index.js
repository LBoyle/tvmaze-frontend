import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

import './styles/css/index.css';

// const store = createStore((state = {}) => state, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
    <Router history={createBrowserHistory(this.props)}>
      <App />
    </Router>
  // </Provider>
  , document.getElementById('root'));
registerServiceWorker();
