import React, { useContext } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './About.css';
import { ThemeContext } from '../context/ThemeContext';

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (

    <div id="about" className="about">
      <div className="line-styling">
        <div className="style-circle" style={ { backgroundColor: theme.primary } } />
        <div className="style-circle" style={ { backgroundColor: theme.primary } } />
        <div className="style-line" style={ { backgroundColor: theme.primary } } />
      </div>
      <div className="about-body">About</div>
    </div>
  );
}
