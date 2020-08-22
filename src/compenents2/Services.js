
import React from 'react';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      services: [
        {
          icon:<i class="fas fa-cocktail"></i>,
          title:"Free cocktail",
          info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
        },
        {
          icon: <i class="fas fa-hiking"></i>,
          title:"Endles hiking",
          info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
        },
        {
          icon: <i class="fas fa-shuttle-van"></i>,
          title:"Free shuttle",
          info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
        },
        {
          icon: <i class="fas fa-beer"></i>,
          title:"Strongest Bear",
          info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
        },
      ]
    }
  }
  
  render() {
    return (
      <div className="services-container">

        <Title title="Services" />
        <div className="services-center ">
        {this.state.services.map((item,index)=>{
           return <article  key={index}>
             <div className="services">
             <span >{item.icon}</span>
             <h4>{item.title}</h4>
             <p>{item.info}</p>
             </div>
           </article>
        })}
        </div>
      </div>
    );
  }
}


export default Services;