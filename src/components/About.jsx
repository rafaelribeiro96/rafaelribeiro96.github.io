import React, { useContext } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './About.css';
import { ThemeContext } from '../context/ThemeContext';
import { aboutData } from '../data/aboutData';

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (

    <div className="about" id="about" style={ { backgroundColor: theme.secondary } }>
      <div className="line-styling">
        <div className="style-circle" style={ { backgroundColor: theme.primary } } />
        <div className="style-circle" style={ { backgroundColor: theme.primary } } />
        <div className="style-line" style={ { backgroundColor: theme.primary } } />
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={ { color: theme.primary } }>{aboutData.title}</h2>
          <p style={ { color: theme.tertiary80 } }>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <img
            src={ aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2 }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
