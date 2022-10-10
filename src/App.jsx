import React from 'react';
import './App.css';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
// import Provider from './context/Provider';
import Main from './page/Main';
import BackToTop from './components/BackToTop';
import ScrollToTop from './utils/ScrollToTop';
import ProjectPage from './page/ProjectPage';

function App() {
  return (
    // <Provider>
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/projects" component={ ProjectPage } />
        <Redirect to="/" />
      </Switch>
      <BackToTop />
    </div>
    // </Provider>
  );
}

export default App;
