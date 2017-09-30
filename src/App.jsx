// @flow
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

/* eslint-disable */
import './favicon.ico?output=favicon.ico';
/* eslint-enable */
import './App.scss';

import Routes from './routes/routes';
import configure from './redux/store/configureStore';

const store = configure ();

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
