import React, { useState } from 'react'

export default function Textform(props) {
    const ChangeToUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert("Changed To UpperCase", "success")

    }
    const ChangeToLo = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (newText.length === 0) {
            props.Alert("Enter SomeThing Into the Text Box", "danger")
        } else {
            props.Alert("Changed To LowerCase", "success")
        }

    }
    const Clear = () => {
        setText("");
    }
    const ChangeToText = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div style={{
            backgroundColor: props.mode === 'dark' ? '#282828' : 'white',
            color: props.mode === 'dark' ? 'white' : '#282828'
        }}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={ChangeToText} id="myBox" rows="8" style={{
                    backgroundColor: props.mode === 'dark' ? '#282828' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#282828'
                }}></textarea>
            </div>
            <button className="btn-personal " onClick={ChangeToUp}>Convert To UpperCase</button>
            <button className="btn-personal mx-2" onClick={ChangeToLo}>Convert To LowerCase</button>
            <button className="btn-personal " onClick={Clear}>Clear Text</button>
            <div className="conatiner my-2">
                <h2>Your Text</h2>
                <p> {text.split(" ").length - 1} <b>words</b> and {text.length} <b>characters</b></p>
                <p> Time to Read these lines is <b>{0.0018 * text.split(" ").length - 0.0018}</b></p>
                <p><b>Your Text:- </b>{text.length > 0 ? text : "Enter Something in TextArea to See Here"}</p>
            </div>
        </div>
    )
}
