import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import initialState from './initial-state';
import {App} from '../components';

const store = configureStore(initialState);

let target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  target
);
