import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form, Col, Image } from 'react-bootstrap';
class Navbars extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
        <Container fluid={true} className="p-0">

          <Navbar className="border-bottom bg-dark " expand="lg">
          
              
            <Image  style={{ height: "70px", width: "180px" }} src="ll.png" />
         
            <Navbar.Toggle className="border" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">

              <Nav>
                <Link className="nav-link  text-warning " to="/">Home</Link>
                <Link className="nav-link  text-warning" to="/About">About</Link>
                <Link className="nav-link  text-warning" to="/Contact">Contact</Link>
              </Nav>

              <Form inline className="ml-auto">
                <FormControl style={{ height: "30px",width: "200px", marginTop: "5px",marginRight: "5px" }} type="text" placeholder="Search" />
                <Button style={{ height: "40px", width: "60px",  marginTop: "5px"}} type="button" size="sm" className=" m-0 mt-1 ml-sm-2 " variant="outline-warning" >Submit</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          

            <Route  path="/About">
              <About/>
            </Route>
            <Route  path="/Contact">
              <Contact/>
            </Route>
        </Container>
       </Switch>
      </Router>

        );
    }
}

export default Navbars;