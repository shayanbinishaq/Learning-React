import React from "react";
import "./About.css";

export default function About({ mode }) {
  const isDarkmode = mode === "dark";
  const myStyle = {
    color: isDarkmode ? "white" : "#1f2020",
    backgroundColor: isDarkmode ? "#1f2020" : "white",
  };

  return (
    <div 
      id="About" 
      className={`About-us ${isDarkmode ? "dark" : ""}`} 
      style={myStyle}
    >
      <h2>About us</h2>
      
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {/* Accordion Item #1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>

        {/* Accordion Item #2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body.
            </div>
          </div>
        </div>

        {/* Accordion Item #3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}