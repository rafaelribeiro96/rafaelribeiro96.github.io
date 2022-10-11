import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../context/ThemeContext';
import { headerData } from '../data/headerData';

export default function Footer() {
  const shortname = (name) => {
    // eslint-disable-next-line no-magic-numbers
    if (name.length > 10) {
      return name.split(' ')[0];
    }
    return name;
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={ { backgroundColor: theme.secondary } }>
      <p style={ { color: theme.tertiary } }>
        Made by
        {' '}
        {shortname(headerData.name)}
      </p>
    </div>
  );
}
