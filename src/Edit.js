import React from 'react';

class Edit extends React.Component {


  render() {
    return (
   
      <div className="editmodal">
      {this.props.editmodal &&

        <div className="center" >

          <div className="top">
            <p>Edit</p>
            <input defaultValue={this.props.defaultcarName} onChange={this.props.editcarName} className="inpt1"></input>
            <input defaultValue={this.props.defaultcarYear} onChange={this.props.editcarYear} className="inpt1"></input>



          </div>
          <div className="bottom"></div>

          <button onClick={this.props.modaledit.bind(this,this.props.index, this.props.defaultcarName, this.props.defaultcarYear)} className="btn1">He</button>
          <button onClick={this.props.closemodal.bind(this)} className="btn1">Yox</button>

        </div>

      }

    </div>

    );
  }
}

export default  Edit