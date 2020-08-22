import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, } from 'react-bootstrap';

class Footer2 extends React.Component {
    render() {
        return (
            <div className="main-footer p-4">
            <Container>
             <div className="row ">
             <div className="col-md-3 col-sm-6 text-light">
                 {/*1ci hisse*/}
             <h4>Footer</h4>
              <ul className="list-unstyled">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
             </div>
             <div className="col-md-3 col-sm-6 text-light">
                 {/*2ci hisse*/}
                 <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
             </div>
             <div className="col-md-3 col-sm-6 text-light">
                 {/*3ci hisse*/}
                 <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
             </div> 
              <div className="col-md-3 col-sm-6 text-light">
                 {/*4ci hisse*/}
             <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
             </div>
             
             </div>
             {/*footer bottom*/}
             <div className="footer-bottom d-flex justify-content-center mt-5 text-light">
              <p>
                 &copy;{ new Date().getFullYear()} Oficial Rixos Hotel Web Site
              </p>   
             </div>
             </Container>  
             </div>
        )
    }
}
export default Footer2