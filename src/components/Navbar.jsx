/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import Fade from 'react-reveal/Fade';
import './Navbar.css';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl,
  Drawer, IconButton, MenuItem, OutlinedInput, Select, Icon, Typography,
} from '@mui/material';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
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
          className="drawer"
        >
          <Box p={ 2 } width="250px" role="presentation" textAlign="right">
            <div className="div-closebtn">
              <CloseIcon
                onClick={ () => setIsDrawerOpen(false) }
                style={ { color: theme.primary } }
                role="button"
                tabIndex="0"
                aria-label="Close"
              />
            </div>
          </Box>
          <br />

          <Fade right>
            <NavLink
              to="/"
              smooth
              spy="true"
              duration={ 2000 }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <IoHomeSharp />
                <span>
                  Home
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#about"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <FaUser />
                <span>
                  Sobre mim
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#resume"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <HiDocumentText />
                <span>
                  Resumo
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#skills"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <BsFillGearFill />
                <span>
                  Skills
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="#/#projects"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <FaFolderOpen />
                <span>
                  Projetos
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#contacts"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <MdPhone />
                <span>
                  Contato
                </span>
              </button>
            </NavLink>
          </Fade>
        </Drawer>
      </div>
    </div>
  );
}
