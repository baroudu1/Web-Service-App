import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap';


let exist = null

try{
    exist = localStorage.getItem("user")
}catch(e){}


function NavBar() {
    return (

        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                    {exist == null &&(<NavDropdown title="Sign In / Sign Up" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#/login">Sign In</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#/register">Sign Up</NavDropdown.Item>
                            
                        </NavDropdown>)}
                        
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBar;
