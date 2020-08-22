import React from 'react'
import Title from './Title'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Searchroom extends React.Component {
 
    
 state = {

    selectedRoomType:'',
    
 }
 
     render() {
     
        return (
            <div className="search-container">
                <Title title="Search Room" />
                <Form.Group as={Col} controlId="formGridState" className="search-center">

                    <div className='fbf'>
                    <div className='searchcenter'>
                        <div>
                 
                    <Form.Control
                      onChange={(e) => { this.setState({selectedRoomType: e.target.value})}}
                     as="select" className='form__inp' >
                        <option>All</option>
                        <option>Single Room</option>
                        <option>Family Room</option>

                    </Form.Control>
                    </div>
                    </div>

                    </div>
                  
                   
                </Form.Group>
              
             

            </div>
            
          
        )
    }
}
export default Searchroom;