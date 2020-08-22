import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Home from './compenents2/Home';
import Rooms from './compenents2/Rooms.';
import SingleRoom from './compenents2/SingleRoom';
import Error from './compenents2/Error';
import Navbarr from './compenents2/Navbarr';
import Footer2 from './compenents2/Footer2';


class App extends React.Component {



  
  render() {
  
    return (
         
   
       <Router>
            <Navbarr/>
         <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/single-room" component={SingleRoom}/>
        <Route  component={Error}/>
        </Switch>
        <Footer2/>
        </Router>
       
 
 

    );
  }
}
export default App;
