import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import headImg from "../FST-Fes.jpg"
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap';

let s = {
    backgroundImage: "url(" + headImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "80vh",
    position : "relative"
}

let abs = {
    position : "absolute",
    top : "0",
    bottom : "0",
    width : "100%",
    height : "100%",
    backgroundColor : "#00000099"
}


function Header() {
    return (

        <header style={s}>
            <div style={abs}></div>
        </header>

    );
}
export default Header;
