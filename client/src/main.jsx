import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {store, persistor} from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // use persist to store the data of the user, using redux tollkit
  <PersistGate persistor={persistor}> 
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
)
