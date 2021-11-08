import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './routes/route'
import { Provider } from 'react-redux'
import store from './controls/redux_store/store';
import 'normalize.css/normalize.css'

ReactDOM.render(
  <Provider store = {store}>
    <Nav />
  </Provider>,

  document.getElementById('root')
);
