import React from 'react';
import './Login.css';
import {Card, Form, Button} from 'react-bootstrap';


export default () =>{


    return(
        <>
            <Card border="light">


                <Card.Body className="d-flex align-items-center text-center">

                    <Card.Text> 

                        <Card.Title as="h2" className="mb-5">Iniciar sesión</Card.Title>

                        <Form>
                            <Form.Group className="m-5 tamaño-input">
                         
                                <Form.Control type="email" placeholder="Email" />
                                <Form.Text className="text-muted">
                                    Ingrese su correo electrónico
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="m-5 tamaño-input">
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <div>
                                <Button variant="info" className="rounded-pill">
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