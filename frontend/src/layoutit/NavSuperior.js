import React from 'react';
import './NavSuperior.css';
import logo from '../images/carrito.png';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default () =>{
    return(
        <>
            <Navbar className="fondo-nav-superior" expand="lg" variant="dark">

                <img style={{ height : "2rem", marginRight : "0.5rem" }} src={logo} alt="logo"/>

                <Navbar.Brand href="#home">Workup</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">


                        <NavDropdown title="Menu principal" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}