import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reactWebSite from './components/reactWebSite/reactWebSite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactWebSite>
    <App />
  </reactWebSite>
);
