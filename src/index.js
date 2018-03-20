import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store";


render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('MainApp'));
