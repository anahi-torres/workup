import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import {Card, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default () =>{

    const history = useHistory()

    const [ email, setEmail ] = useState('')
    const [ contraseña, setContraseña ] = useState('')

    const handleEmailChange = (event) =>{
        setEmail( event.target.value )
    }
    
    const handleContraseñaChange = (event) =>{
        setContraseña( event.target.value )
    }

    const handleLoginClick = () =>{

        let params = {
                        email    : email,
                        password : contraseña
                     }

        fetch('http://localhost:8888/auth', {
                                                method: 'POST',
                                                credentials : 'include',
                                                body : JSON.stringify ( params ),
                                                headers : {
                                                            'Content-Type' : 'application/json'
                                                          }
                                            }
        ).then( response => response.json() )
         .then( data =>{
               if ( data.status === 'ok'){
                    Swal.fire(
                        {
                        text: data.message,
                        icon: 'success' 
                        }
                    )
                    history.push('/home')
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
            <Card border="light flex-grow-1">


                <Card.Body className="d-flex align-items-center justify-content-center text-center">

                    <Card.Text> 

                        <Card.Title as="h2" className="mb-5">Iniciar sesión</Card.Title>

                        <Form>
                            <Form.Group className="m-5 tamaño-input">
                         
                                <Form.Control placeholder="Email"
                                              className="input-orange" 
                                              type="email"
                                              value={email}
                                              onChange={handleEmailChange}
                                />

                                <Form.Text className="text-muted">
                                    Ingrese su correo electrónico
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="m-5 tamaño-input">
                                <Form.Control placeholder="Contraseña" 
                                              className="input-orange" 
                                              type="password"
                                              value={contraseña}
                                              onChange={handleContraseñaChange}
                                />
                            </Form.Group>
                            <div>
                                <Button 
                                        className="rounded-pill button-blue"
                                        onClick={handleLoginClick}
                                >
                                    Iniciar sesión
                                </Button>
                            </div>
                            <div className="m-4">
                            
                                ¿Todavía no tenes cuenta?

                                <Link to="/registro">

                                    <Button variant="link">
                                        ¡Registrate!
                                    </Button>

                                </Link>
                                
                            </div>
                        </Form>

                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}