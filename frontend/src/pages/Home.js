import React from 'react';
import Login from '../componentes/Login';
import Frase from '../componentes/Frase';
import ImagenHome from '../componentes/ImagenHome';

export default (props) => {
  return (
    <>

        <div className="d-flex justify-content-between flex-wrap mb-3 colour-text">

            <ImagenHome />

            <Frase />

            <Login setLoggedUser={props.setLoggedUser} />

        </div>

    </>
  )
}