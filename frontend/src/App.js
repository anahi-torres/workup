import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import NavSuperior from './layoutit/NavSuperior';
import Home from './pages/Home';
import Registro from './pages/Registro';
import UserHome from './pages/UserHome';
import FormCurriculum from './pages/FormCurriculum';


function App() {

    const [ user, setUser ] = useState(null)

  return (
    <>
      <Router>

        <NavSuperior />

        <Route exact path="/" children={ <Home setLoggedUser={ setUser } /> } />

        <Switch>

          <Route exact path="/registro" children={ <Registro /> } />

          <Route exact path="/home" children={ <UserHome /> } />

          <Route exact path="/form" children={ <FormCurriculum />} />

        </Switch>

      </Router>
    </>
  )

}

export default App;