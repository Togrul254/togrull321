import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

class Searchmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [
        {
          image: <img style={{ width: "250px ", height: "170px" }} src='tek1.jpg' />,
          info: "Single Room",
          money: '200$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek2.jpg' />,
          info: "Single Room",
          money: '100$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek3.jpg' />,
          info: "Single Room",
          money: '150$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "250px", height: "170px" }} src='tek4.jpg' />,
          info: "Single Room",
          money: '150$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='tek5.jpg' />,
          info: "Single Room",
          money: '50$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam1.jpg' />,
          info: "Family Room",
          money: '250$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam2.jpg' />,
          info: "Family Room",
          money: '250$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam3.jpg' />,
          info: "Family Room",
          money: '450$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam4.jpg' />,
          info: "Family Room",
          money: '350$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          image: <img style={{ width: "240px", height: "170px" }} src='fam5.jpg' />,
          info: "Family Room",
          money: '300$',
          roominfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },


      ]
    }
  }



  render() {
    return (
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
                      <Card.Body>{item.roominfo}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </article>
        })}
      </div>
    )
  }
}
export default Searchmap;