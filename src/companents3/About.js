import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'

class About extends React.Component {
    render() {
        return (
           
            <div className="Container" >

            <div className="boxa">

                <div className="top">
                    <div className="image">
                        <a href="http://utigps.com/">
                            <img style={{ width: "162px", height: "41px", }} src="logo.png"></img>
                        </a>
                        <p style={{ color: "grey", fontSize: "14px" }}>Global GPS izləmə sistemi</p>
                    </div>

                </div>
                <div className="box2a">
                    <div className="drop">
                        <Dropdown >
                            <Dropdown.Toggle size="sm" variant="light">
                                AZE
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Engilish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rus</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Azerbaycan Dili</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
    

                   <p className="pabout1">Haqqımızda</p>
                   <p  className="pabout2">UtiGPS.com 2019-cu il 1 fevral tarixindən istifadeye verilmişdir.</p>

                </div>
                <div className="bottom">

                <div className="footer">


                    <Link to="/about" id="paragraf3" > Haqqımızda</Link>
                    <Link to="/contact" id="paragraf3"> Əlaqə</Link>
                    <Link to="/gps" id="paragraf3" > GPS al</Link>



                </div>
                <div className="logo">
                    <a href="https://itunes.apple.com/us/app/utigps/id1449786042?l=ru&amp;ls=1&amp;mt=8">
                        <img style={{ margin: "5px" }} src="ios.png"></img>
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.utigps">
                        <img style={{ margin: "6px" }} src="android.png"></img>
                    </a>
                </div>
                </div>
            </div>

        </div>
        )
    }
}
export default  About;