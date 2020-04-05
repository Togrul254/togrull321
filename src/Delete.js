import React from 'react';

 class Delete extends React.Component  {
  render() {
    return (
        <div className="deletemodal">
        {this.props.deletemodal &&

          <div className="center">

            <div className="top">
              <p>Delete</p>

            </div>

            <button onClick={this.props.splicemodal.bind(this,this.props.index)} className="btn1">He</button>
            <button onClick={this.props.closemodal} className="btn1">Yox</button>

          </div>

        }
     </div>
    );
  }
}


export default  Delete