import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gps from './Gps';
import About from './About';

class Contact extends React.Component {
  render() {
    return (
      
     
      <Router>
      <div className="Container" >

        <div className="boxa">

          <div className="top">
            <div className="image">
              <img style={{ width: "162px", height: "41px", }} src="logo.png"></img>
              <p style={{ color: "grey", fontSize:"14px"}}>Global GPS izləmə sistemi</p>
            </div>

          </div>
          <div className="box2a">
            <div className="langa">
              <img style={{ width: "17px", height: "11px", }} src="aze.png"></img>
              <p id="aza">AZE</p>
         
            </div>
            <p style={{margin:"15px", color:"grey"}}>Əlaqə</p>
           <p style={{margin:"15px",color:"grey"}} > İş günü: həftə içi 5 gün. İş saatı: 10:00 dan 19:00 dək. Telefon: (+99455) 288-11-27</p>
           
          </div>
           
           <div className="footer">
             
           <Link to={'/about'} id="paragraf3">  Haqqımızda</Link>
           <p id="paragraf3"> Əlaqə</p>
           <Link to={'/gps'} id="paragraf3" > GPS al</Link>
       
            

           </div>
     <div className="logo">
       <a  href="https://itunes.apple.com/us/app/utigps/id1449786042?l=ru&amp;ls=1&amp;mt=8">
       <img style={{margin:"5px"}} src="ios.png"></img>
       </a>
     
       <a  href="https://play.google.com/store/apps/details?id=com.utigps">
       <img style={{margin:"6px"}} src="android.png"></img>
       </a>
     </div>

        </div>

      </div>
      <Switch>
            
             
              <Route exact path='/about' component={About} />
              <Route exact path='/gps' component={Gps} />
      </Switch>
           
      </Router>
    );
  }
}


export default  Contact;