import React from 'react';
import Banner from './Banner';
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [
        {
          image: <img style={{ width: "250px ", height: "170px" }} src='tek1.jpg' />,
          info: "Single Room",
          money: '200$',
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek2.jpg' />,
          info: "Single Room",
          money: '100$'
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek3.jpg' />,
          info: "Single Room",
          money: '150$'
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek4.jpg' />,
          info: "Single Room",
          money: '150$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='tek5.jpg' />,
          info: "Single Room",
          money: '50$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam1.jpg' />,
          info: "Family Room",
          money: '250$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam2.jpg' />,
          info: "Family Room",
          money: '250$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam3.jpg' />,
          info: "Family Room",
          money: '450$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam4.jpg' />,
          info: "Family Room",
          money: '350$'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam5.jpg' />,
          info: "Family Room",
          money: '300$'
        },


      ]
    }
  }


  render() {
    return (
      <div>
        <Banner title="Welcome" subtitle="Our Rooms" image="roomimage" link="/" Linktitle="Return Home"></Banner>
        <div className="searchmap">
          {this.state.search.map((item, index) => {
            return <article key={index}>

              <div className="search">
                <span>{item.image}</span>
                <p>{item.money}</p>
                <h4>{item.info}</h4>
                <Accordion defaultActiveKey="0">

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                       Info Click
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Info</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </article>
          })}
        </div>
      </div>

    );
  }
}


export default Rooms;