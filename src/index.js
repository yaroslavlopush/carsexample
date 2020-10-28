import FormContainer from "./js/components/container/FormContainer.js";
import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './js/reducers/Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
document.getElementById('create-article-form')
);