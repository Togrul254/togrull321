import React from 'react';
import './App.css';
import Navbars from './Navbar';
import Footerr from './Footer';
import Body from './Body';

class App extends React.Component {



  render() {

    return (
      <div>
    <Navbars/>
     <Body/>
    <Footerr/>

    </div>
   
    );
  }
}
export default App;
