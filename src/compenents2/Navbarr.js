import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form, Col, Image } from 'react-bootstrap';
class Navbarr extends React.Component {
    render() {
        return (
          
        <Container fluid={true} className="p-0 ">

          <Navbar inverse fluid className="border-bottom bg-light " expand="lg" >
          
              
            <Image style={{ height: "100px", width: "250px", marginLeft:"15px", }} src="hotell.png" />
         
            <Navbar.Toggle className="border" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle " >

              <Nav >
                <Link className="nav-link  text-dark ml-3" to="/"> <i class="fas fa-home "></i> Home</Link>
                <Link className="nav-link  text-dark ml-3" to="/single-room"> <i class="fas fa-hotel"></i> Single-Room</Link>
                <Link className="nav-link  text-dark ml-3" to="/rooms"><i class="fas fa-person-booth"></i> Rooms</Link>
 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
       
        </Container>
  

        );
    }
}

export default Navbarr;