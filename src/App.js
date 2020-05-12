import React from 'react';
import './App.css';
import Navbars from './Navbar';
import Footerr from './Footer';
import Body from './Body';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {



  render() {

    return (

        <div>
       
        
            <Navbars />
              <Body />
            <Footerr />
   
        </div>


    );
  }
}
export default App;
