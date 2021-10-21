import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'


import App from './App'
import './index.scss'
import store from './redux/store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>, document.getElementById('root')
);
serviceWorker.unregister();