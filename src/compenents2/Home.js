import React  from 'react';
import Banner from './Banner';
import Services from './Services';
import Searchroom from './Searchroom';
import Searchmap from './Searchmap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
  render() {
    return (
       <div>
        
      <Banner title="Rooms" subtitle="Deluxe rooms starting at $300"  image="room4image" link="/rooms"  Linktitle="Our Rooms">
      </Banner>
 
       <Services/>
       <Searchroom/>
       <Searchmap/>
      
      </div>
      
    );
  }
}


export default Home;