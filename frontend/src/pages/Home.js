import React from 'react';
import NavSuperior from '../layoutit/NavSuperior';
import Login from '../componentes/Login';
import Frase from '../componentes/Frase';
import logo from '../images/Home.jpg'
import ImagenHome from '../componentes/ImagenHome';

export default () => {
  return (
    <>
       <NavSuperior />

 

        <div className="d-flex justify-content-between flex-wrap mb-3">

            <ImagenHome />

            <Frase />

            <Login />

        </div>

    </>
  )
}