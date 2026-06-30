import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "#1f2020",
    backgroundColor: "White",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const ToggleBtn = () => {
    if (myStyle.color === "#1f2020") {
      setmyStyle({
        color: "white",
        backgroundColor: "#1f2020",
      });
      setBtnText("Enable Light Mode");
    } else {
      setmyStyle({
        color: "#1f2020",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div id="About" className={`About-us ${myStyle.color === "#1f2020" ? "" : "dark"}`} style={myStyle}>
      <div className="button-darkmode">
        <button
          onClick={ToggleBtn}
          type="button"
          className="btn border-0"
        >
          {btnText}
        </button>
      </div>
      <h2>About us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="flush-headingOne"
            style={myStyle}
          >
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
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="flush-headingTwo"
            style={myStyle}
          >
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
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="flush-headingThree"
            style={myStyle}
          >
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
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
