import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown, Nav, NavbarToggle, NavbarCollapse, FormControl, Button, Form, Col, Image } from 'react-bootstrap';
import Cookies from 'js-cookie';



class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edittmodal: false,
            title: null,
            data:[],
            id:''
        }
    }


    openmodal() {
        this.setState({
            edittmodal: true
        })
    }

    closemodal() {
        this.setState({
            edittmodal: false
        })
    }




    serialize(obj) {
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    }



    componentDidMount() {
        fetch('http://api.utigps.com/objectgroups/list?' + this.serialize({


            token: Cookies.get('token_login')
        }), {
            method: 'POST',

        }).then((response) => {
            response.json().then((result) => {
                console.warn('result', result.data);
                this.setState({
                    data:result.data
                })
                localStorage.setItem('account', JSON.stringify({
                    status: result.status,
                    token: result.token
                }))
               
            })

        })
    }

    save() {

        fetch('http://api.utigps.com/objectgroups/add?' + this.serialize({

            title: this.state.title,


            token: Cookies.get('token_login')
        }), {
            method: 'POST',

        }).then((response) => {
            response.json().then((result) => {
                console.warn('result', result);
                localStorage.setItem('account', JSON.stringify({
                    status: result.status,
                    token: result.token
                }))

            })

        })
    }

    info(id) {

        fetch('http://api.utigps.com/objectgroups/info?'+this.serialize({
    
          token: Cookies.get('token_login'),
          id: id
          
        }),{
            method:'POST',
        
        }).then((response)=>{
              response.json().then((result)=>{
              console.warn("info",result);
              localStorage.setItem('account', JSON.stringify({
                status: result.status,
                token: result.token
            }))
            })
        })
        }
    
    

delete = (id) => {
    const filteredItems = this.state.data.filter(function(item) {
      return (item.id !== id)
    })

    this.setState({
      data: filteredItems
    })


    fetch('http://api.utigps.com/objectgroups/delete?'+this.serialize({

      token: Cookies.get('token_login'),
      id: id
      
    }),{
        method:'POST',
    
    }).then((response)=>{
          response.json().then((result)=>{
          console.warn("delete",result);
          localStorage.setItem('delete', JSON.stringify({
            status: result.status,
            token: result.token
        }))
        })
    })

  }
  

  edit(){
      this.setState({
          editModal:true
      })
  }
  editmodalcancel(){
    this.setState({
        editModal:false
    })
  }
    p(id) {
        alert(id)

    }

    render() {
        return (

            <div className="modall m-3">
{this.state.data.map((item, index) =>
            <div key={index}>

              <div>
                <p>{item.title}</p>
                <button onClick={()=> this.delete(item.id)} >Delete</button>
                <button onClick={()=> this.info(item.id)} >info</button>
                <button onClick={()=> this.edit(item.id)} >edit</button>
              
              </div>

            </div>
            )}  {this.state.editModal &&
                  <div>
                     <input></input>
                     <button >Save et</button>
                     <button onClick={() =>this.editmodalcancel()}>legv et</button>
                  </div>
                }
                <button onClick={() => this.openmodal()}>Elave et</button>
              
              
                {this.state.edittmodal &&

                    <div className="mdl" >

                        <div className="boxr">

                            <div className="top">


                            </div>
                            <div className="box2r">

                                <Form className="form">
                                    <Form.Label  >Basliq </Form.Label>
                                    <Form.Control type="text" onChange={(event) => { this.setState({ title: event.target.value }) }} />
                                    <Form.Label  >Obyektler</Form.Label>
                                    <Form.Control type="text" onChange={(event) => { this.setState({ type: event.target.value }) }} />
                                </Form>
                                <div className="btn12">
                                    <button onClick={() => this.save()}>Yadda saxla</button>
                                    <button onClick={() => this.closemodal()}>imtina et</button>
                                </div>

                            </div>
                        </div>
                    </div>
                }

            </div>

        )
    }
}
export default Notifications