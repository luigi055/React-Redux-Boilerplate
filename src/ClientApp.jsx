import React from 'react';
import {render} from 'react-dom';
import App from './App';

const renderApp = () => {
  render (<App />, document.getElementById ('app'));
};
renderApp ();

if (module.hot) {
  console.log ('Hot Module Replacement Activated');
  module.hot.accept ('./App', () => {
    renderApp ();
  });
}
