import React from 'react';
import { Link } from 'react-router-dom';

import './NavSuperior.css';
import logo from '../images/LogoNav.png';
import {Nav, Navbar, Dropdown} from 'react-bootstrap';

export default () =>{
    return(
        <>
            <Navbar className="fondo-nav" expand="lg" variant="dark">

                <Link to="/">

                    <img style={{ height : "3rem", marginRight : "0.2rem" }} src={logo} alt="logo"/>

                    <Navbar.Brand>JOIN-jobs</Navbar.Brand>

                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">

                        <Dropdown>
                            <Dropdown.Toggle  variant="outline-light" id="dropdown-basic">
                                Menu principal
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}