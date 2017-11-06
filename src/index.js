import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './app/reducers';
import applyMiddleware from 'redux/es/applyMiddleware';
import thunk from 'redux-thunk';

import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';

import 'bootswatch/superhero/bootstrap.css';
import './app/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
