import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // develop mới ảnh hưởng | StrictMode render 2 lần
  // product ko ảnh hưởng
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
