import React, { useContext } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './Navbar.css';
import { themeData } from '../data/themeData';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const {
    themeColor, selectThemeColor, theme, selectThemeType,
  } = useContext(ThemeContext);

  return (
    <div id="navbar" className="navbar">
      <div className="button-theme-option">
        <form
          className="theme-color-form"
          style={ { color: theme.primary } }
        >
          <label
            className="theme-color-checkbox-title"
            htmlFor="checkbox-theme"
          >
            Dark Mode
            <input
              id="checkbox-theme"
              type="checkbox"
              checked={ theme.type === 'dark' }
              onChange={ selectThemeType }
            />
          </label>
          <label
            className="theme-color-select-title"
            htmlFor="theme-color-select"
          >
            Theme Color

            <select
              id="theme-color-select"
              value={ themeColor }
              onChange={ selectThemeColor }
            >
              {Object.keys(themeData).map((color) => (
                <option key={ color } value={ color }>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>

      <div id="sidebar">Sidebar</div>

    </div>
  );
}
