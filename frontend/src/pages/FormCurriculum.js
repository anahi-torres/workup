import React, { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import AutoCompletado from '../componentes/AutoCompletado';

export default () =>{



    const [ curriculum, setCurriculum ] = useState('');
    const [ trabajo, setTrabajo ] = useState(null);
    const [ añoTrabajo, setAñoTrabajo ] = useState('');
    const [ nivelEstudios, setNivelEstudios ] = useState('');
    const [ salarioPretendido, setSalarioPretendido ] = useState('');
    const [ tecnologias, setTecnologias ] = useState([]);

    return(
        <>
            <div className="d-flex justify-content-center">
                <Card className="m-5 sombra">

                    <Card.Header className="h3">Cargar mis datos</Card.Header>

                    <Card.Body className="m-4">

                        <Form.Group>
                            <Form.File label="Subir cv"
                                       type="file"
                                       onChange={ event => { setCurriculum( event.target.files[0] ) } }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>¿Trabajaste o estas trabajando actualmente?</Form.Label>
                            <Form.Check label="Si"
                                        type="radio"
                                        name="1"
                                        value="si"
                                        checked={'si' === trabajo}
                                        onChange={ event => { setTrabajo(event.target.value) } }
                            />
                            <Form.Check label="No" 
                                        type="radio"
                                        name="1"
                                        value="no"
                                        checked={'no' === trabajo}
                                        onChange={ event => { setTrabajo(event.target.value) } }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Año en el que empezaste a trabajar</Form.Label>
                            <Form.Control className="input-orange" 
                                          type="text" 
                                          value={añoTrabajo}
                                          onChange={ event => { setAñoTrabajo(event.target.value) } }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Nivel de estudio</Form.Label>
                            <Form.Control className="input-orange" 
                                          type="text"
                                          value={nivelEstudios}
                                          onChange={ event => { setNivelEstudios(event.target.value) } }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Salario pretendido</Form.Label>
                            <Form.Control className="input-orange" 
                                          type="text"
                                          value={salarioPretendido}
                                          onChange={ event => { setSalarioPretendido(event.target.value) } } 
                            />
                        </Form.Group>

                        <AutoCompletado handleTecnologias={ setTecnologias } />

                    </Card.Body>

                    <Card.Footer className="text-right">
                        <Button className="rounded-pill button-blue">Cargar mis datos</Button>
                    </Card.Footer>

                </Card>
            </div>
        </>
    )

}