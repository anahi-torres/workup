import React from 'react';
import NavSuperior from '../layoutit/NavSuperior';
import Login from '../componentes/Login';
import Frase from '../componentes/Frase';

export default () => {
  return (
    <>
       <NavSuperior />

        <div className="d-flex justify-content-around flex-wrap">
            
            <Frase />

            <Login />

        </div>        
    


    </>
  )
}