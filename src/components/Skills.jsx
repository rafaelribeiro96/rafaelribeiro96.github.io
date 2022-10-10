import React, { useContext } from 'react';
// import React, { useContext } from 'react';
// import context from '../contexts/Context';
import './Skills.css';
import Marquee from 'react-fast-marquee';
import { ThemeContext } from '../context/ThemeContext';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../utils/skillsImage';

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };
  return (
    <div className="skills" id="skills" style={ { backgroundColor: theme.secondary } }>
      <div className="skillsHeader">
        <h2 style={ { color: theme.primary } }>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill-scroll">
          <Marquee
            gradient={ false }
            speed={ 80 }
            pauseOnHover
            pauseOnClick
            delay={ 0 }
            play
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={ id } style={ skillBoxStyle }>
                <img src={ skillsImage(skill) } alt={ skill } />
                <h3 style={ { color: theme.tertiary } }>
                  {skill}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
