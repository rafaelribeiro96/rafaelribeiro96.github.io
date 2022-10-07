import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState(localStorage
    .getItem('themeColor') || 'green');
  const [themeType, setThemeType] = useState(localStorage
    .getItem('themeType') || 'lightTheme');
  const [theme, setTheme] = useState(themeData[themeColor].lightTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectThemeColor = useCallback(
    ({ target }) => {
      setThemeColor(target.value);
      localStorage.setItem('themeColor', target.value);
    },
  );

  const selectThemeType = useCallback(
    ({ target }) => {
      const newType = target.checked ? 'darkTheme' : 'lightTheme';
      setThemeType(newType);
      localStorage.setItem('themeType', newType);
    },
  );

  useEffect(() => {
    setTheme(themeData[themeColor][themeType]);
  }, [themeColor, themeType]);

  const setHandleDrawer = useCallback(() => setDrawerOpen(!drawerOpen), [drawerOpen]);

  const contextValue = useMemo(
    () => ({
      themeColor, selectThemeColor, theme, selectThemeType, drawerOpen, setHandleDrawer,
    }),
    [themeColor, setThemeColor, themeType, setThemeType, theme, setTheme,
      drawerOpen, setHandleDrawer],
  );

  return (
    <ThemeContext.Provider value={ contextValue }>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
