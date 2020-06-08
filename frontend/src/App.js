import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import NavSuperior from './layoutit/NavSuperior';
import Home from './pages/Home';
import Registro from './pages/Registro';


function App() {
  return (
    <>
      <Router>

        <NavSuperior />

        <Route exact path="/" children={ <Home /> } />

        <Switch>

          <Route exact path="/registro" children={ <Registro /> } />

        </Switch>

      </Router>
    </>
  );
}

export default App;