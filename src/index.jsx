import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ThemeContextProvider from './context/ThemeContext';

/* import reportWebVitals from './reportWebVitals'; */

/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

ReactDOM.render(
  <HashRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </HashRouter>,
  document.getElementById('root'),
);

/* reportWebVitals(); */
