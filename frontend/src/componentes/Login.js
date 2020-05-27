import React, { useState } from 'react';
import './Login.css';
import {Card, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default () =>{

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
                                              type="password"
                                              value={contraseña}
                                              onChange={handleContraseñaChange}
                                />
                            </Form.Group>
                            <div>
                                <Button variant="info" 
                                        className="rounded-pill"
                                        onClick={handleLoginClick}
                                >
                                    Iniciar sesión
                                </Button>
                            </div>

                            ¿Todavía no tenes cuenta?

                            <Button className="m-4" variant="link">
                                Registrate!
                            </Button>
                        </Form>

                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}