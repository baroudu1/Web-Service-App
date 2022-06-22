import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import ProviderOffres from './components/providerOffres';
import NavBar from './components/navBar';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap';
import Header from './components/Header';
ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <NavBar />
      <Header/>
      <ProviderOffres />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
