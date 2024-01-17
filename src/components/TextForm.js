// text area 

import React, { useState } from 'react'

export default function TextForm(props) {

    // create functions 
    const Uppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert(" Converted to UpperCase", "success")
    }
    const Lowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert(" Converted to LowerCase", "success")
    }
    const ClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert(" Clear text successfully", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert(" Copy text successfully", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    // use state ==> text 
    const [text, setText] = useState("");
    // setText(newText)

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : '#042743', backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Uppercase}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Lowercase}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h2>Your Text Summary</h2>
                <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read </p>

                <h2>Preview Text</h2>
                <p>{text.length > 0 ? text : "Nothing to preview !! "}</p>
            </div>
        </>
    )
}