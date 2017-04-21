import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Router, browserHistory, hashHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import routes from './routes';
import * as memberAction from './actions/memberAction';

import configureStore from './store/configureStore';
const store = configureStore();

// // Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('app')
);