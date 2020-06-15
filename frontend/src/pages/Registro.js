import React from 'react';
import { Link } from 'react-router-dom';

import {Card, Form, Button} from 'react-bootstrap';

export default () =>{

    return(
        <>
            <div className="d-flex justify-content-center colour-text">
                <Card className="m-5 sombra " style={{ width: '25rem'}}>

                    <Card.Body className="d-flex align-items-center justify-content-center text-center m-5">

                        <Card.Text> 

                            <Card.Title as="h2" className="mb-5">Registrate</Card.Title>

                            <Form>
                                <Form.Group className="m-5 tamaño-input">
                            
                                    <Form.Control placeholder="Email" 
                                                type="email"
                                                className="input-orange"
                                    />

                                    <Form.Text className="text-muted">
                                        Ingrese su correo electrónico
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="m-5 tamaño-input">
                                    <Form.Control placeholder="Contraseña" 
                                                type="password"
                                                className="input-orange"
                                    />
                                </Form.Group>
                                <div>
                                    <Button 
                                            className="rounded-pill button-blue"
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