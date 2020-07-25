import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {Card, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import ImagenHome from '../componentes/ImagenHome';

export default () =>{

    const history = useHistory()

    const [ email, setEmail ] = useState('')
    const [ contraseña, setContraseña ] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ apellido, setApellido ] = useState('')

    const handleRegisterClick = () =>{

        let params = {
                        email      : email,
                        contraseña : contraseña,
                        nombre     : nombre,
                        apellido   : apellido
                     }

        fetch( 'http://localhost:8888/auth/registro', {
                                                        method: 'POST',
                                                        credentials : 'include',
                                                        body : JSON.stringify ( params ),
                                                        headers : {
                                                                    'Content-Type' : 'application/json'
                                                                  }
                                                      }
        ).then( response => response.json() 
        ).then( data =>{

                if ( data.status === 'ok'){
                    Swal.fire(
                        {
                           text: data.message,
                           icon: 'success' 
                        }
                    )
                    history.push('/')
                }else{
                    Swal.fire(
                        {
                           text: data.message,
                           icon: 'error' 
                        }
                    )
                }

            }
        )

    }

    return(
        <>
            <div className="d-flex justify-content-between colour-text flex-wrap ">

                <ImagenHome />

                <Card className="flex-grow-1 border-white">

                    <Card.Body className="d-flex align-items-center justify-content-center text-center">

                        <Card.Text> 

                            <Card.Title as="h2" className="m-5">Registrate</Card.Title>

                            <Form>

                                <Form.Group className="m-3">

                                    <Form.Control placeholder="Nombre" 
                                                  type="text"
                                                  className="input-orange"
                                                  value={nombre}
                                                  onChange={ event => { setNombre(event.target.value) } }
                                    />

                                </Form.Group>

                                <Form.Group className="m-3 mt-5">

                                    <Form.Control placeholder="Apellido" 
                                                  type="text"
                                                  className="input-orange"
                                                  value={apellido}
                                                  onChange={ event => { setApellido(event.target.value) } }
                                    />

                                </Form.Group>

                                <Form.Group className="m-3 mt-5">
                            
                                    <Form.Control placeholder="Email" 
                                                  type="email"
                                                  className="input-orange"
                                                  value={email}
                                                  onChange={ event => { setEmail(event.target.value) } }
                                    />

                                    

                                </Form.Group>

                                <Form.Group className="m-3 mt-5 mb-5">

                                    <Form.Control placeholder="Contraseña" 
                                                  type="password"
                                                  className="input-orange"
                                                  value={contraseña}
                                                  onChange={ event => { setContraseña(event.target.value) } }
                                    />

                                </Form.Group>

                                <div>
                                    <Button 
                                            className="rounded-pill button-blue"
                                            onClick={handleRegisterClick}
                                    >
                                        Registrarse
                                    </Button>
                                </div>

                                <div className="m-3">
                                
                                    ¿Ya tenés una cuenta?

                                    <Link to="/">

                                        <Button variant="link">
                                            ¡Iniciar sesión!
                                        </Button>

                                    </Link>
                                </div>

                            </Form>

                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>
        </>
    )

}