import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './UserHome.css';
import { Card, Button } from 'react-bootstrap';
import BarraLateral from './BarraLateral';

export default () => {

    const [ sideNav, setSideNav ] = useState( false )

    const isOpen = () =>{
        setSideNav(!sideNav)

        console.log(sideNav)
    }

    return(
        <>
            <div>
                
                <BarraLateral changeSideNav={isOpen} />

                <Card className={ sideNav ? "marginNavOpen sombra" : "marginNav sombra" } >

                    <div className="d-flex justify-content-around flex-wrap mt-5 mb-5">

                        <Link to="/form">
                            <Button className="m-1 rounded-pill button-blue sombra">Busco trabajo</Button>
                        </Link>

                        <Button className="m-1 rounded-pill button-blue sombra">Soy recruiter</Button>
                    </div>
                </Card>

            </div>
        </>
    )

}