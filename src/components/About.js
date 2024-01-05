//import React, { useState } from "react";
export default function About(props) {
  /*   const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  }); */
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    border: props.mode === "dark" ? "1px solid #ffffff" : "1px solid #042743",
  };

  return (
    <div className="container">
      <div
        className="accordion"
        id="accordionExample"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About us</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Transform your text effortlessly with formatting options. Easily
              convert cases, add line breaks, or perform other formatting tasks
              in a user-friendly interface.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Formatting Ease</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Gain insights into your text—count characters, words, and analyze
              their frequency. Discover the structure and details within your
              content effortlessly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Custom Tools</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Access specialized utilities tailored to your needs. Whether it's
              encoding, decoding, or specialized text operations, find the right
              tool to simplify your tasks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
