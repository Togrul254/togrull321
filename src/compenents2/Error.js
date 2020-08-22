import React  from 'react';
import './Error.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Banner from './Banner';
class Error extends React.Component {
  render() {

    return (
                   
            
      <Banner title="404" subtitle="Not found" image="bgimage" link="/" Linktitle="Return Home">
      </Banner>
    );
  }
}  



export default Error;