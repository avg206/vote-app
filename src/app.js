import 'semantic-ui-css/semantic.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appState from './reducers';
import App from './containers/App';

let store = createStore(appState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
