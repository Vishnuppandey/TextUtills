import React, { useState } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper Case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };
  const handleOnChange = (event) => {
    //console.log("On changed");
    setText(event.target.value);
  };
  const clearBox = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Box has been cleared", "success");
  };
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert To lowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearBox}>
          Clear the TextField
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={RemoveExtraSpace}
        >
          RemoveExtraSpace
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length}chars{" "}
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minute read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview it here"}</p>
      </div>
    </>
  );
}
