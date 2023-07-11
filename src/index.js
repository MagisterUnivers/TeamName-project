import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = '';
// better to create instance instead of base  thing

const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer Token',
  },
});

axios.defaults.instance = instance;
// like this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/TeamName-project">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
