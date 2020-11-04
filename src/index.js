import MainPage from "./js/components/container/MainPage.js";
import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './js/reducers/Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
document.getElementById('create-article-form')
);