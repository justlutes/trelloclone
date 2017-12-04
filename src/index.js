import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
