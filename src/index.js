import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducers } from './reducers/itemReducer';
import './scss/style.scss'; 
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducers, composeWithDevTools());

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);