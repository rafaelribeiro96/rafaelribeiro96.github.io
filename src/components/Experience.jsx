import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Experience.css';
import { experienceData } from '../data/experienceData';
import ExperienceCard from './ExperienceCard';

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="experience"
      id="experience"
      style={ { backgroundColor: theme.secondary } }
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={ theme.expimg } alt="" />
        </div>
        <div className="experience-description">
          <h1 style={ { color: theme.primary } }>Experiência</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={ exp.id }
              id={ exp.id }
              jobtitle={ exp.jobtitle }
              company={ exp.company }
              startYear={ exp.startYear }
              endYear={ exp.endYear }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
