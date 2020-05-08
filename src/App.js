import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav,NavbarToggle,NavbarCollapse} from 'react-bootstrap';


class App extends React.Component {

  

  render() {

    return (
      <Router>
        <Container fluid={true} className="p-0">

          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand >Navbar</Navbar.Brand>
             <Navbar.Toggle className="border" aria-controls="navbar-toggle" />
             <Navbar.Collapse id="navbar-toggle">
               <Nav className="ml-auto">
                 <Link className="nav-link" to="/">Home</Link>
                 <Link className="nav-link" to="/About">About</Link>
                 <Link className="nav-link" to="/Contact">Contact</Link>
               </Nav>
             </Navbar.Collapse>
          </Navbar>
d
        </Container>
      </Router>
      
    );
  }
}
export default App;
