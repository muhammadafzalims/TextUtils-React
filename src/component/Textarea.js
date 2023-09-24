import React, { useState } from 'react'

export default function Textarea(props) {
    const handleUpClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowerCase!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to upperCase!", "success");
    }

    const handleOnChange =  (event)=>{
        setText(event.target.value)

    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("all text has been cleared!", "success");
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("all text has been copied!", "success")

    }
    const handleExtraSpaceClick = ()=>{
        let newText = text.split(/[" "]+/)
        setText(newText.join(" "))
        props.showAlert("extra spaces has been removed!", "success")
    }


const[text, setText] = useState("");

  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type="button" class="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Change to lowerCase</button>
        <button disabled={text.length===0} type="button" class="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Change to upperCase</button>
        <button disabled={text.length===0} type="button" class="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear All </button>
        <button disabled={text.length===0} type="button" class="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy text </button>
        <button disabled={text.length===0} type="button" class="btn btn-primary mx-2 my-1" onClick={handleExtraSpaceClick}>Remove extra space </button>

        <div>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

    </div>
    
  )
}
