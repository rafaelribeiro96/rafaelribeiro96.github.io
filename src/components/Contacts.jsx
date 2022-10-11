/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react-func/max-lines-per-function */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@mui/styles';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../context/ThemeContext';

import { socialsData } from '../data/socialsData';
import { contactsData } from '../data/contactsData';
import './Contacts.css';

export default function Contacts() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const useStyles = makeStyles(() => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '0 5px',
      transform: 'translate(25px,50%)',
      display: 'inline-flex',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '21px',
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '23px',
      transition: '250ms ease-in-out',
      flexShrink: 0,
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.08)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name,
          email,
          message,
        };

        axios.post(contactsData.sheetAPI, responseData).then(() => {
          console.log('success');
          setSuccess(true);
          setErrMsg('');
          setName('');
          setEmail('');
          setMessage('');
          setOpen(false);
        });
      } else {
        setErrMsg('rafaelfelipe.r@hotmail.com');
        setOpen(true);
      }
    } else {
      setErrMsg('Preencha todos os campos');
      setOpen(true);
    }
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={ { backgroundColor: theme.secondary } }
    >
      <div className="contacts--container">
        <h1 style={ { color: theme.primary } }>Contatos</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={ handleContactForm }>
              <div className="input-container">
                <label
                  htmlFor="Name"
                  className={ classes.label }
                >
                  Nome
                </label>
                <input
                  id="Name"
                  placeholder="Nome"
                  value={ name }
                  onChange={ (e) => setName(e.target.value) }
                  type="text"
                  name="Name"
                  className={ `form-input ${classes.input}` }
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="Email"
                  className={ classes.label }
                >
                  E-mail
                </label>
                <input
                  id="Email"
                  placeholder="E-mail"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                  type="email"
                  name="Email"
                  className={ `form-input ${classes.input}` }
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="Mensagem"
                  className={ classes.label }
                >
                  Mensagem
                </label>
                <textarea
                  id="Mensagem"
                  placeholder="Escreva sua mensagem...."
                  value={ message }
                  onChange={ (e) => setMessage(e.target.value) }
                  type="text"
                  name="Message"
                  className={ `form-message ${classes.message}` }
                />
              </div>

              <div className="submit-btn">
                <button
                  type="submit"
                  className={ classes.submitBtn }
                >
                  <p>{!success ? 'Enviar' : 'Enviado'}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={ {
                        animation: !success
                          ? 'initial'
                          : 'fly 0.8s linear both',
                        position: success
                          ? 'absolute'
                          : 'initial',
                      } }
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={ {
                        display: !success
                          ? 'none'
                          : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      } }
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={ {
                vertical: 'top',
                horizontal: 'center',
              } }
              open={ open }
              autoHideDuration={ 4000 }
              onClose={ handleClose }
            >
              <SnackbarContent
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={ handleClose }
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
                style={ {
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: 'var(--primaryFont)',
                } }
                message={ errMsg }
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a
              href={ `mailto:${contactsData.email}` }
              className="personal-details"
            >
              <div className={ classes.detailsIcon }>
                <FiAtSign />
              </div>
              <p style={ { color: theme.tertiary } }>
                {contactsData.email}
              </p>
            </a>
            <a
              href={ `tel:${contactsData.phone}` }
              className="personal-details"
            >
              <div className={ classes.detailsIcon }>
                <FiPhone />
              </div>
              <p style={ { color: theme.tertiary } }>
                {contactsData.phone}
              </p>
            </a>
            <div className="personal-details">
              <div className={ classes.detailsIcon }>
                <HiOutlineLocationMarker />
              </div>
              <p style={ { color: theme.tertiary } }>
                {contactsData.address}
              </p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.github && (
                <a
                  href={ socialsData.github }
                  target="_blank"
                  rel="noreferrer"
                  className={ classes.socialIcon }
                >
                  <FaGithub aria-label="GitHub" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={ socialsData.linkedIn }
                  target="_blank"
                  rel="noreferrer"
                  className={ classes.socialIcon }
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={ socialsData.instagram }
                  target="_blank"
                  rel="noreferrer"
                  className={ classes.socialIcon }
                >
                  <FaInstagram aria-label="Instagram" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        src={ theme.contactsimg }
        alt="contacts"
        className="contacts--img"
      />
    </div>
  );
}
