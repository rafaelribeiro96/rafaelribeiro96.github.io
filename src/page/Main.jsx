import React from 'react';
// import React, { useState, useContext, useEffect } from 'react';
/* import { useHistory } from 'react-router-dom';
import context from '../contexts/ContextRecipe'; */
import './Main.css';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contacts />
      <Footer />
      Main
    </div>

  );
}
