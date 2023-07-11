import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <BrowserRouter basename="/TeamName-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
