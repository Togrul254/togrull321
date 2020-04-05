import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <div> 
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      
          
           {this.props.data.map((data, index) => (

            <ul>
              <li>{data.carName}</li>
              <li>{data.carYear}</li>
              <button onClick={this.props.modalshow.bind(this,index)}>Edit</button>
              <button onClick={this.props.deleteshow.bind(this,index)}>Delete</button>

            </ul>

          ))}
              </div>
          
           </div>
    );
  }
}
export default Body