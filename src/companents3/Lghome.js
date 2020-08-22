
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form, Col, Image } from 'react-bootstrap';

class Lghome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      lang: null,
      logoutPage: false,
      text: '',
    }
  }


  logout() {
    Cookies.remove('token_login', { path: '/' });
    this.setState({
      logoutPage: true
    })
  }


  serialize(obj) {
    var str = "";
    for (var key in obj) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  }



  componentDidMount() {

    fetch('http://api.utigps.com/account/info?' + this.serialize({


      token: Cookies.get('token_login')
    }), {
      method: 'POST',

    }).then((response) => {
      response.json().then((result) => {
        console.warn('result', result);
    
        
      })

    })
  }

  componentWillMount(){
    if(Cookies.get('token_login',{path:'/'})) {
      this.setState({
        logoutPage:false
      })
    }
    else{
      this.setState({
        logoutPage:true
      })
    }
  }


  render() {

    if (this.state.logoutPage) {
      return <Redirect to='/' />
    }
    
    return (

<div>

     
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link className="nav-link  text-dark ml-3" to="notifications"> Bildirisler</Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <button onClick={() => this.logout()} >Logout</button>

  </Navbar.Collapse>
</Navbar>
</div>
    );
  }
}

export default Lghome;
