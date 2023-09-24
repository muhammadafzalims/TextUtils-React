import React from 'react'

export default function About(props) {
  return (
    <div>
        <div className="card" style={{  backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}>
      
        <div className="card-body">
        <h5 className="card-title">TextUtils</h5>
        <p className="card-text">This is text utility to modify your text. it has the properties like conversion of text to lower and upper case, copy text, clear text and remove extra spaces.</p>
       
        </div>
        </div>
    </div>
  )
}
