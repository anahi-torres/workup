import React from 'react';
import Login from '../componentes/Login';
import Frase from '../componentes/Frase';
import ImagenHome from '../componentes/ImagenHome';

export default () => {
  return (
    <>

        <div className="d-flex justify-content-between flex-wrap mb-3">

            <ImagenHome />

            <Frase />

            <Login />

        </div>

    </>
  )
}