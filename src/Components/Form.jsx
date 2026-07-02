import React, { useEffect, useState,useRef } from "react";
import "./Form.css";
import Alert from "./Alert";

export default function Form(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    if(text.trim() !== ""){
      props.showAlert("Text converted to uppercase", "success");
    }
    else{
      props.showAlert("Text is empty, nothing to convert", "warning");
    }
  };
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    if(text.trim() !== ""){
      props.showAlert("Text converted to lowercase", "success");
    }
    else{
      props.showAlert("Text is empty, nothing to convert", "warning");
    }
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    if(text.trim() !== ""){
      props.showAlert("Text copied to clipboard", "success");
    }
    else{
      props.showAlert("Text is empty, nothing to copy", "warning");
    }
  };
  const handlePasteClick = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(text + clipboardText);
      props.showAlert("Text pasted from clipboard", "success");
    } catch (err) {
      console.error("failed to read the content: ", err);
    }
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    if (text.trim() !== "") {
      props.showAlert("Text cleared", "success");
    }
    else {
      props.showAlert("Text is already empty", "warning");
    }
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.trim() !== ""){
      props.showAlert("Extra spaces removed", "success");
    }
    else{
      props.showAlert("Text is empty, nothing to remove", "warning");
    }
  };
  const handleSentenceClick = () => {
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
    if(text.trim() !== ""){
      props.showAlert("Text converted to sentence case", "success");
    }
    else{
      props.showAlert("Text is empty, nothing to convert", "warning");
    }
  };
  return (
    <>
      <div
        className="Form my-3"
        style={{ color: props.mode === "dark" ? "white" : "Black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Text Area
          </label>

          <textarea
            className="form-control"
            id="text-area"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Enter text here"
            onChange={handleOnChange}
            rows="3"
          ></textarea>
        </div>
        <div className="button">
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleLowerClick}
          >
            Lowercase
          </button>
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleSentenceClick}
          >
            Sentence Case
          </button>
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleCopyClick}
          >
            Copy text
          </button>
          <button
            type="input"
            className="btn"
            id="btn_s"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            type="button"
            className="btn"
            id="btn_s"
            onClick={handlePasteClick}
          >
            Paste text
          </button>
        </div>
        <div className="Text_summary">
          <h2>Text summary</h2>
          <p>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
            {text.length} characters
          </p>
          <p>It'll take {0.008 * text.length} minutes to read this</p>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "No text to preview" : text}</p>
        </div>
      </div>
    </>
  );
}
