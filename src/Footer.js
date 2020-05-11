import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Footerr() {

    return (
        <footer className="bg-dark " >
            <Container fluid={true} >
                <Row className="border-top d-flex justify-content-between p-3 ">
                    <Col className="p-0 text-secondary  " md={5} se={12} >
                       
                          <h1>Footer</h1>
                        İstifadə qaydaları
                        Müəllif hüquqları qorunur.
                        Məlumatdan istifadə etdikdə istinad mütləqdir.
                        Məlumat internet səhifələrində istifadə edildikdə müvafiq keçidin qoyulması mütləqdir.

                       </Col>


                       <Col className="p-0 text-secondary " md={3} se={12}  >
                       
                       <Image  style={{ height: "100px", width: "200px" }} src="ll.png" />
                    
                      </Col>



                    <Col className="p-0 d-flex justify-content-center  text-light" md={3}>

                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                       </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footerr;