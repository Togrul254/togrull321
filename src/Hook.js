import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Hook() {

  const [state, setState] = useState({

    firstName: '',
    lastName: '',
    number: 0
  });
useEffect(() => {
 
   document.title= state.number
})

function onClick(){
  setState({ number: state.number + 1 })
  
}
  return (





    <div>

     
        <button onClick={() => onClick()} >
         Click {state.number}
        </button>

      <form className="mr-auto">
        <input
          type="text"
          value={state.firstName}
          onChange={e => setState({ firstName: e.target.value })}
        />
        <h3>{state.firstName}</h3>
      </form>

    </div>
  );
}
export default Hook;