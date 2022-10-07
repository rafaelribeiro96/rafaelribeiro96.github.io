import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ThemeContextProvider from './context/ThemeContext';

ReactDOM.render(
  <HashRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </HashRouter>,
  document.getElementById('root'),
);
