/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './Navbar.css';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl,
  Drawer, IconButton, MenuItem, OutlinedInput, Select, Fade, Icon, Typography,
} from '@mui/material';
import CloseIcon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { themeData } from '../data/themeData';
import { ThemeContext } from '../context/ThemeContext';
import { headerData } from '../data/headerData';

export default function Navbar() {
  const {
    themeColor, selectThemeColor, theme, selectThemeType,
  } = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const shortname = (name) => {
    // eslint-disable-next-line no-magic-numbers
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-container">
        <h1 style={ { color: theme.secondary } }>
          {shortname(headerData.name)}
        </h1>
        <div
          className="button-theme-option"
          style={ { /* border: `3px solid ${theme.primary}`, */ color: theme.tertiary } }
        >
          <form
            className="theme-color-form"
            /* style={ { color: theme.primary } } */
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
        <IconButton
          onClick={ () => setIsDrawerOpen(true) }
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div id="drawer">

        <Drawer
          anchor="right"
          open={ isDrawerOpen }
          onClose={ () => setIsDrawerOpen(false) }
        >
          <Box p={ 2 } width="250px" role="presentation" textAlign="center">
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}
