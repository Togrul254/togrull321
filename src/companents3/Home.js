import React from 'react'
import {Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email:null,
            password:null,
          login:false
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

    
  
 
login(){
    fetch('http://api.utigps.com/auth/signin?'+this.serialize({
        
        email: this.state.email,
        password: this.state.password,
    
    }),{
        method:'POST',
    
    }).then((response)=>{
          response.json().then((result)=>{
          console.warn("result",result);
          localStorage.setItem('login',JSON.stringify({
            login: true,
            token: result.token,
            status: result.status
            
          }))

          Cookies.set('token_login', result.token, {expires: 1},{ path: '/' });

          if(result.status === "success") {
            this.setState({
              login: true
            })
          }
          else{
            this.setState({
              login: false
            })
          }
        })
    })

    }

    render() {
        if(this.state.login){
            return <Redirect to="/lghome"/>
        }


        
      if(Cookies.get('token_login',{path:'/'})) {
        return <Redirect to="/lghome"/>
      }

    
        return (
         
            

                    <div className="Container" >

                        <div className="box">

                            <div className="top">
                                <div className="image">
                                    <a href="http://utigps.com/">
                                        <img style={{ width: "162px", height: "41px", }} src="logo.png"></img>
                                    </a>
                                    <p style={{ color: "grey", fontSize: "14px" }}>Global GPS izləmə sistemi</p>
                                </div>

                            </div>
                            <div className="box2">
                                <div className="drop">
                                    <Dropdown >
                                        <Dropdown.Toggle   size="sm" variant="light">
                                            AZE
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Engilish</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Rus</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Azerbaycan Dili</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Form className="form">
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label  >Email </Form.Label>
                                        <Form.Control type="email" onChange={(event) => {this.setState({email:event.target.value})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
                                    </Form.Group>
                                </Form>

                                <button onClick={()=>{this.login()}} className="btnn">Daxil ol</button>
                              
                                <div className="prg2">


                                    <Link to="/lostpassword" id="paragraf2" > Şifrəni unutdun?</Link>
                                    <Link to="/register" id="paragraf2" > Qeydiyyat</Link>

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
export default Home