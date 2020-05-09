import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form } from 'react-bootstrap';


class App extends React.Component {



  render() {

    return (
      <Router>
        <Container fluid={true} className="p-0">

          <Navbar className="border-bottom bg-dark " expand="lg">
            <Navbar.Brand className=" text-info" >Navbar</Navbar.Brand>
            <Navbar.Toggle className="border" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto"> 
                <Form inline>
                  <FormControl style={{ height:"30px", marginTop:"5px"}} type="text" placeholder="Search" />
                  <Button style={{ height:"30px",width:"60px"}} type="button" size="sm" className=" m-0 mt-1 ml-sm-2" variant="outline-info" >Submit</Button>
                </Form>
                <Link className="nav-link  text-info" to="/">Home</Link>
                <Link className="nav-link  text-info" to="/About">About</Link>
                <Link className="nav-link  text-info" to="/Contact">Contact</Link>
 
 
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </Router>

    );
  }
}
export default App;
