import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, NavDropdown, Navbar, NavbarBrand, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form, Col, Image } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
class Navbar3 extends React.Component {
    render() {
        return (
        
          <Navbar bg="dark" variant="light">
          <Navbar.Brand href="#home" className="ml-5 text-light">Navbar</Navbar.Brand>
          <Nav className="mr-auto text-light">
            <Nav.Link className="text-light"href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#features">Features</Nav.Link>
            <Nav.Link  className="text-light" href="#pricing">Pricing</Nav.Link>
          </Nav>
      
        </Navbar>
        
       
  
        )
    }
} 
export default Navbar3