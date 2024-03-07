import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import interceptor from './interceptors';

const root = ReactDOM.createRoot(document.getElementById('root'));
interceptor();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
