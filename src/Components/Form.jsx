import React, {useEffect, useState} from "react";
import './Form.css'

export default function Form(props) {
    const [text, setText]= useState('');

    const handleUpClick= ()=> {
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const handleLowerClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
    }
    const handleOnChange= (event)=> {
      console.log('On change');
      setText(event.target.value)
    }
    const handleCopyClick=()=>{
      var text= document.getElementById("text-area");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleClearClick=()=>{
      let newtext='';
      setText(newtext);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleSentenceClick=()=>{
       let sentences = text.split(". ");

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();

    if (sentence.length > 0) {
      sentences[i] =
        sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }
  }
  let newText = sentences.join(". ");
  setText(newText);
    }
  return (
    <>
    <div className="Form my-3">
        <h1>{props.heading}</h1>
      
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Text Area
        </label>
      
        <textarea
          className="form-control"
          id="text-area"
          value={text}
          placeholder="Enter text here"
          onChange={handleOnChange}
          rows="3"
        ></textarea>
      </div>  
      <div className="button">
        <button type="input" className="btn" id="btn_s" onClick={handleUpClick} >Uppercase</button>
        <button type="input" className="btn" id="btn_s" onClick={handleLowerClick}>Lowercase</button>
        <button type="input" className="btn" id="btn_s" onClick={handleSentenceClick}>Sentence Case</button>
        <button type="input" className="btn" id="btn_s" onClick={handleCopyClick}>Copy text</button>
        <button type="input" className="btn" id="btn_s" onClick={handleClearClick}>Clear text</button>
        <button type="input" className="btn" id="btn_s" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="Text_summary">
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>It'll take {0.008* text.length} minutes to read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
    
    </>
  );
}   
