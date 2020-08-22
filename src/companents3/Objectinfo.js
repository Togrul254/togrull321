import React, { Component } from 'react'
import Cookies from 'js-cookie';
class Objectinfo extends Component {


constructor(props) {
    super(props);
    this.state = {
        title:"",
     
        
    }
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


    componentDidMount(id) {

        fetch('http://api.utigps.com/objectgroups/info?' + this.serialize({
            id:id,
            token: Cookies.get('token_login'),
         
        }), {
            method: 'POST',

        }).then((response) => {
            response.json().then((result) => {
                console.warn('info', result);
                localStorage.setItem('info', JSON.stringify({
                    status: result.status,
                    token: result.token
                }))

            })

        })
}



    render() {
        return (
            <div>
             
            </div>
        )
    }
}
export default Objectinfo;