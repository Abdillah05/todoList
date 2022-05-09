
   
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import store from '../src/redux/store'
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



