/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
// import context from '../contexts/Context';
import './Landing.css';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ThemeContext } from '../context/ThemeContext';

import { headerData } from '../data/headerData';
import { socialsData } from '../data/socialsData';

export default function Landing() {
  const { theme } = useContext(ThemeContext);

  const [isHoverResume, setIsHoverResume] = useState(false);

  const [isHoverContact, setIsHoverContact] = useState(false);

  const handleMouseEnterResume = () => {
    setIsHoverResume(true);
  };

  const handleMouseLeaveResume = () => {
    setIsHoverResume(false);
  };

  const handleMouseEnterContact = () => {
    setIsHoverContact(true);
  };

  const handleMouseLeaveContact = () => {
    setIsHoverContact(false);
  };

  const useStyles = {
    resumeBtn: {
      color: isHoverResume ? theme.secondary : theme.primary,
      backgroundColor: isHoverResume ? theme.tertiary : '',
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      fontSize: '1rem',
      fontWeight: '500',
      height: '50px',
      fontFamily: 'var(--primaryFont)',
      border: isHoverResume ? `3px solid ${theme.tertiary}`
        : `3px solid ${theme.primary}`,
      transition: '100ms ease-out',
    },

    contactBtn: {
      backgroundColor: isHoverContact ? theme.secondary : theme.primary,
      color: isHoverContact ? theme.tertiary : theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      height: '50px',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      border: isHoverContact ? `3px solid ${theme.tertiary}`
        : `3px solid ${theme.primary}`,
      transition: '100ms ease-out',
    },
  };

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
            {socialsData.linkedIn && (
              <a
                href={ socialsData.linkedIn }
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  className="landing-social"
                  style={ { color: theme.secondary } }
                  aria-label="LinkedIn"
                />

              </a>
            )}
            {socialsData.github && (
              <a
                href={ socialsData.github }
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  className="landing-social"
                  style={ { color: theme.secondary } }
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a
                href={ socialsData.twitter }
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  className="landing-social"
                  style={ { color: theme.secondary } }
                  aria-label="Twitter"
                />

              </a>
            )}
          </div>
        </div>
        <img
          src={ headerData.image }
          alt="foto de perfil Rafael Ribeiro"
          className="landing-img"
        />
        <div
          className="landing-container-right"
          style={ { backgroundColor: theme.secondary } }
        >
          <div
            className="landing-container-right-content"
            style={ { color: theme.tertiary } }
          >
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>
            <div className="landing-container-right-buttonContainer">
              <a
                href={ headerData.resumePdf }
                download="resume"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  style={ useStyles.resumeBtn }
                  onMouseEnter={ handleMouseEnterResume }
                  onMouseLeave={ handleMouseLeaveResume }
                >
                  Download CV
                </button>

              </a>
              <NavLink
                to="/#contacts"
                smooth
                spy="true"
                duration={ 2000 }
              >
                <button
                  type="button"
                  style={ useStyles.contactBtn }
                  onMouseEnter={ handleMouseEnterContact }
                  onMouseLeave={ handleMouseLeaveContact }
                  to="/#contacts"
                >
                  Contato
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
