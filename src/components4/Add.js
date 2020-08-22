import React, { Component } from 'react'

export default class Add extends Component {


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

    
  
 
    add(){
        fetch('Https://university.fogito.com/articles/add'+this.serialize({
            
        
        }),{
            method:'POST',
        
        }).then((response)=>{
              response.json().then((result)=>{
              console.warn("result",result);
              localStorage.setItem('add',JSON.stringify({
                  token:result.token
              }))
        
            })
        })
    }



    render() {
        return (
            <div>
               <button onClick={()=> this.add()}>Add</button>
            </div>
        )
    }
}
