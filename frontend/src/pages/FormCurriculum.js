import React from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import AutoCompletado from '../componentes/AutoCompletado';

export default () =>{

    return(
        <>
            <div className="d-flex justify-content-center">
                <Card className="m-5 sombra">

                    <Card.Header className="h3">Cargar curriculum</Card.Header>

                    <Card.Body className="m-4">

                        <Form.Group>
                            <Form.File label="Subir cv" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>¿Trabajaste o estas trabajando actualmente?</Form.Label>
                            <Form.Check label="Si"
                                        type="radio"
                                        name="1"
                            />
                            <Form.Check label="No" 
                                        type="radio"
                                        name="1"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Año en el que empezaste a trabajar</Form.Label>
                            <Form.Control type="text" className="input-orange" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contanos tus capacidades y los lenguajes</Form.Label>
                            <Form.Control type="text" className="input-orange" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Nivel de estudio</Form.Label>
                            <Form.Control type="text" className="input-orange" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Salario pretendido</Form.Label>
                            <Form.Control type="text" className="input-orange" />
                        </Form.Group>

                        <AutoCompletado />

                    </Card.Body>

                    <Card.Footer className="text-right">
                        <Button className="rounded-pill button-blue">Cargar mis datos</Button>
                    </Card.Footer>

                </Card>
            </div>
        </>
    )

}