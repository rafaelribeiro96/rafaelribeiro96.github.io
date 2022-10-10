/* eslint max-lines: off */
/* eslint-disable max-lines-per-function */

import html from '../assets/svg/skills/html.svg';
import docker from '../assets/svg/skills/docker.svg';
import css from '../assets/svg/skills/css.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import react from '../assets/svg/skills/react.svg';
import typescript from '../assets/svg/skills/typescript.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import python from '../assets/svg/skills/python.svg';
import git from '../assets/svg/skills/git.svg';
import jest from '../assets/svg/skills/jest.svg';
import rtl from '../assets/svg/skills/rtl.svg';
import redux from '../assets/svg/skills/redux.svg';
import nodejs from '../assets/svg/skills/nodeJs.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
  case 'html':
    return html;
  case 'docker':
    return docker;
  case 'css':
    return css;
  case 'javascript':
    return javascript;
  case 'react':
    return react;
  case 'typescript':
    return typescript;
  case 'mongodb':
    return mongoDB;
  case 'mysql':
    return mysql;
  case 'python':
    return python;
  case 'git':
    return git;
  case 'jest':
    return jest;
  case 'rtl':
    return rtl;
  case 'redux':
    return redux;
  case 'node js':
    return nodejs;
  default:
    return null;
  }
};

export default skillsImage;

/*
import html from '../assets/svg/skills/html.svg';
import photoshop from '../assets/svg/skills/photoshop.svg';
import illustrator from '../assets/svg/skills/illustrator.svg';
import docker from '../assets/svg/skills/docker.svg';
import adobeXd from '../assets/svg/skills/adobe-xd.svg';
import afterEffects from '../assets/svg/skills/after-effects.svg';
import css from '../assets/svg/skills/css.svg';
import angular from '../assets/svg/skills/angular.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import nextJS from '../assets/svg/skills/nextJS.svg';
import nuxtJS from '../assets/svg/skills/nuxtJS.svg';
import react from '../assets/svg/skills/react.svg';
import typescript from '../assets/svg/skills/typescript.svg';
import vue from '../assets/svg/skills/vue.svg';
import bootstrap from '../assets/svg/skills/bootstrap.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import postgresql from '../assets/svg/skills/postgresql.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import c from '../assets/svg/skills/c.svg';
import cplusplus from '../assets/svg/skills/cplusplus.svg';
import csharp from '../assets/svg/skills/csharp.svg';
import java from '../assets/svg/skills/java.svg';
import php from '../assets/svg/skills/php.svg';
import python from '../assets/svg/skills/python.svg';
import git from '../assets/svg/skills/git.svg';
import materialui from '../assets/svg/skills/materialui.svg';
import figma from '../assets/svg/skills/figma.svg';
import flutter from '../assets/svg/skills/flutter.svg';
import markdown from '../assets/svg/skills/markdown.svg';
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg';
import unity from '../assets/svg/skills/unity.svg';
import canva from '../assets/svg/skills/canva.svg';
import jest from '../assets/svg/skills/jest.svg';
import rtl from '../assets/svg/skills/rtl.svg';
import redux from '../assets/svg/skills/redux.svg';
import nodejs from '../assets/svg/skills/nodeJs.svg';
 export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
  case 'html':
    return html;
  case 'photoshop':
    return photoshop;
  case 'docker':
    return docker;
  case 'illustrator':
    return illustrator;
  case 'adobe xd':
    return adobeXd;
  case 'after effects':
    return afterEffects;
  case 'css':
    return css;
  case 'angular':
    return angular;
  case 'javascript':
    return javascript;
  case 'next js':
    return nextJS;
  case 'nuxt js':
    return nuxtJS;
  case 'react':
    return react;
  case 'typescript':
    return typescript;
  case 'vue':
    return vue;
  case 'bootstrap':
    return bootstrap;
  case 'mongodb':
    return mongoDB;
  case 'mysql':
    return mysql;
  case 'postgresql':
    return postgresql;
  case 'tailwind':
    return tailwind;
  case 'c':
    return c;
  case 'c++':
    return cplusplus;
  case 'c#':
    return csharp;
  case 'java':
    return java;
  case 'php':
    return php;
  case 'python':
    return python;
  case 'git':
    return git;
  case 'material ui':
    return materialui;
  case 'figma':
    return figma;
  case 'flutter':
    return flutter;
  case 'markdown':
    return markdown;
  case 'microsoft office':
    return microsoftoffice;
  case 'unity':
    return unity;
  case 'canva':
    return canva;
  case 'jest':
    return jest;
  case 'rtl':
    return rtl;
  case 'redux':
    return redux;
  case 'node js':
    return nodejs;
  default:
    return null;
  }
};
 */
