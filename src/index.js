import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {APP} from './routers/APP'
import {saveState} from './localStorage'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <APP />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

window.onbeforeunload = (e) => {
  const state = store.getState();
  saveState(state);
};