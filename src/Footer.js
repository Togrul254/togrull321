import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Footerr() {

    return (
            <div className="main-footer bg-dark p-4">
           <Container>
            <div className="row ">
            <div className="col-md-3 col-sm-6 text-warning">
                {/*1ci hisse*/}
            <h4>Footer</h4>
             <ul className="list-unstyled">
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
             </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-warning">
                {/*2ci hisse*/}
                <h4>Lorem Ipsum</h4>
             <ul className="list-unstyled">
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
             </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-warning">
                {/*3ci hisse*/}
                <h4>Lorem Ipsum</h4>
             <ul className="list-unstyled">
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
               <li>Lorem Ipsum</li>
             </ul>
            </div> 
             <div className="col-md-3 col-sm-6 text-warning">
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
                &copy;{ new Date().getFullYear()} Global Music App
             </p>   
            </div>
            </Container>  
            </div>
    );
}

export default Footerr;