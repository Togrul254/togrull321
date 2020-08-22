import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Cookies from 'js-cookie';
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state={  
            fullname:"",
            lang:"",
            email:"",
            password:"",
            register:false,
            country:1,
       
        }
    }
      serialize(obj){
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
      }

    
  
    register(){

        fetch('http://api.utigps.com/register?'+this.serialize({
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            country: this.state.country,
        }),{
            method:'POST',
        
        }).then((response)=>{
              response.json().then((result)=>{
              console.warn('result',result);
              localStorage.setItem('register',JSON.stringify({
                  register:true,
                  token: result.token
              }))
               Cookies.set(this.state.email, result.token);
        this.setState({
           register:true
            })
        })
     
        })
    

}
    
   
    render() {
        return (

            <div className="Container" >

                <div className="boxr">

                    <div className="top">
                        <div className="image">
                            <a href="http://utigps.com/">
                                <img style={{ width: "162px", height: "41px", }} src="logo.png"></img>
                            </a>
                            <p style={{ color: "grey", fontSize: "14px" }}>Global GPS izləmə sistemi</p>
                        </div>

                    </div>
                    <div className="box2r">
                        <div className="drop">
                            <Dropdown  onChange={(e) => {this.setState({lang:e.target.value})}}>
                        
                                <Dropdown.Toggle size="sm" variant="light">
                                    AZE
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item value="1">Engilish</Dropdown.Item>
                                    <Dropdown.Item  value="2">Rus</Dropdown.Item>
                                    <Dropdown.Item  value="3" >Azerbaycan Dili</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Form className="form">
                            <Form.Label  >Ad Soyad </Form.Label>
                            <Form.Control type="text"  onChange={(e) => {this.setState({fullname:e.target.value})}}/>
                            <Form.Group controlId="formGroupEmail">
                                        <Form.Label  >Email </Form.Label>
                                        <Form.Control type="email" onChange={(event) => {this.setState({email:event.target.value})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
                                    </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Ölkə</Form.Label>
                                <Form.Control as="select" >
                                    <option>--</option>
                                    <option>Azerbaycan</option>
                                    <option>Gurcustan</option>
                                    <option>Rusya</option>

                                </Form.Control>
                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label className="fcl">{`Qaydaları oxudum razıyam `}</Form.Check.Label>

                                    </Form.Check>
                                </div>
                            ))}

                        </Form>

                        <button  onClick={()=>this.register()}  className="btnn">Qeyd ol</button>

                        <div className="prg2">

                            <Link to="/" id="paragraf2" > Giriş</Link>
                            <Link to="/lostpassword" id="paragraf2" > Şifrəni unutdun?</Link>


                        </div>
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
export default Register