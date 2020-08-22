import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
export default function Banner({title,subtitle,link,Linktitle,image}) {
    return (
       
<div className="Container">
<div className={image}>

 <div className="box">
   <div className="ust"> 
   <h1>{title}</h1>
    </div>
    <div className="alt"> 
    <h4>{subtitle}</h4>
    <Button variant="light"><Link to={link}>{Linktitle}</Link></Button>
    </div>

 </div>

</div>
 </div>
    )
}