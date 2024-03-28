import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import Reducer from './_reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render로 렌더링
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // document.getElementById('root')
);

reportWebVitals();
