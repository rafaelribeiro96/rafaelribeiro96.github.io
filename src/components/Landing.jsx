import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './Landing.css';
import { ThemeContext } from '../context/ThemeContext';

export default function Landing() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="landing" className="landing">
      <div className="landing-container">
        <div
          className="landing-container-left"
          style={ { backgroundColor: theme.primary } }
        >
          <div
            className="landing-container-left-content"
            style={ { color: theme.secondary } }
          >
            Landing Left
          </div>
        </div>
        <div
          className="landing-container-right"
          style={ { backgroundColor: theme.secondary } }
        >
          <div
            className="landing-container-right"
            style={ { color: theme.tertiary } }
          >
            Landing Right
            <button
              type="button"
              style={ { color: theme.primary } }
            >
              Botão de Teste

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
