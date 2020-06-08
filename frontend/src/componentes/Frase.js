import React from 'react';
import { Link } from 'react-router-dom';

import './Frase.css';
import {Card, Jumbotron, Button} from 'react-bootstrap';

export default () =>{
    return(
        <>
            <Card className="border-white fondo-frase">
                <Jumbotron className="color-frase d-flex align-items-center text-right">
                    
                    <div>
                        <h1 className="mb-4">Empleá tu pasión!</h1>

                        <p className="lead mb-2">
                            Encontrá tu mejor trabajo!
                        </p>


                        <div className="h5 mb-5">
                            Buscá trabajo en la bolsa de empleo líder en Argentina,
                            <br /> encontrá las mejores ofertas de empleo y<br /> oportunidades de trabajo en tu área profesional.
                        </div>

                        <Link to="/registro">
                            <Button className="button-outline-blue rounded-pill">
                                Registrarme
                            </Button>
                        </Link>
                    </div>

                </Jumbotron>
            </Card>
        </>
    )
}