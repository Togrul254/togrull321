import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div className="Container" >
     
        <div style={{ width: '100%', height: '200', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '200', alignItems: 'center' }}>

            <input onChange={this.props.AddCarName} className="aa" style={{ width: '200', height: '30', borderRadius: 5, margin: 10 }}></input>
            <input onChange={this.props.AddCarYear} className="aa" style={{ width: '200', height: '30', borderRadius: 5 }}></input>
            <button style={{ width: '80%', height: '30', borderRadius: 10, backgroundColor: 'blue', color: '#FFF', fontSize: 18, marginTop: 5 }} onClick={this.props.add}>Add</button>


          </div>
        </div>


          </div>
    );
  }
}

export default Header