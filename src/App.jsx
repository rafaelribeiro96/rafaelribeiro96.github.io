import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Provider from './context/Provider';
import MainPage from './page/MainPage';

function App() {
  return (
    // <Provider>
    <Switch>
      <Route exact path="/" component={ MainPage } />
      {/* <Redirect to="/" /> */}
    </Switch>
    // </Provider>
  );
}

export default App;
