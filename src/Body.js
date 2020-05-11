import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
class Body extends React.Component {
  render() {
    return (


      
      <Carousel >
        <Carousel.Item>
    <img 
       style={{ height: '18rem' }}
      className="d-block w-100"
      src="slide4.jpg"
      
    />
    <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       style={{ height: '18rem' }}
      className="d-block w-100"
      src="slide1.jpg"
     
    />
    <Carousel.Caption>
    <h3>Slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       style={{ height: '18rem' }}
      className="d-block w-100"
      src="slide5.jpg"
      
    />

    <Carousel.Caption>
    <h3>Slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       style={{ height: '18rem' }}
      className="d-block w-100"
      src="slide6.jpg"
     
    />

    <Carousel.Caption>
         <h3>Slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    );
  }
}
export default Body