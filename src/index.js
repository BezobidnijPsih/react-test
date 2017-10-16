import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import List from './pages/List';
// import Detail from './pages/Detail';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
