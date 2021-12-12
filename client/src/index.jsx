import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import rootReducer from './_reducer/rootReducer';
require('dotenv').config();

const store = configureStore({
  reducer: rootReducer,
  middleware: [promiseMiddleware, thunkMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
