import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Provider from './context/Provider';
import Main from './page/Main';

function App() {
  return (
    // <Provider>
    <Switch>
      <Route exact path="/" component={ Main } />
      {/* <Redirect to="/" /> */}
    </Switch>
    // </Provider>
  );
}

export default App;
