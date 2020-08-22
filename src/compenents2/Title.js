import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title({title}) {
    return (
        <div className="titlecenter mt-3">
            <h3>{title}</h3> 
        </div>
    )
}
