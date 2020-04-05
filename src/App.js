import React from 'react';
import './App.css';
import Edit from './Edit';
import Delete from './Delete';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Register from './Register';
import Lostpassword from './Lostpassword';
import Gps from './Gps';
import About from './About';
import Contact from './Contact';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }




  render() {

    return (


      <Router>
      <div className="Container" >

        <div className="box">

          <div className="top">
            <div className="image">
              <img style={{ width: "162px", height: "41px", }} src="logo.png"></img>
              <p style={{ color: "grey", fontSize:"14px"}}>Global GPS izləmə sistemi</p>
            </div>

          </div>
          <div className="box2">
            <div className="lang">
              <img style={{ width: "17px", height: "11px", }} src="aze.png"></img>
              <p id="az">AZE</p>
            </div>
            <p id="paragraf">E-poçt</p>
            <input type="text"></input>
            <p id="paragraf">Şifrə</p>
            <input type="Password"></input>
            <button className="btn">Daxil ol</button>

            <div className="prg2">
           
          
            <Link to={'/lostpassword'} id="paragraf2" > Şifrəni unutdun?</Link>
            <Link to={'/register'} id="paragraf2" > Qeydiyyat</Link>
            
            </div>
          </div>
           
           <div className="footer">
             
           <Link to={'/about'} id="paragraf3" > Haqqımızda</Link>
           <Link to={'/contact'} id="paragraf3"> Əlaqə</Link>
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
              <Route path='/lostpassword'  component={Lostpassword} />
              <Route  path='/register' component={Register} />
              <Route  path='/about' component={About} />
              <Route  path='/contact' component={Contact} />
              <Route  path='/gps' component={Gps} />
      </Switch>
           
      </Router>
    );
  }
}
export default App;

