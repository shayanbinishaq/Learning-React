import "./Navbar.css";
import React, { useState } from "react";

export default function Navbar({
  title = "Set title here",
  aboutText = "Set text here",
  mode,
  toggleMode,modeLabel
}) 
{
  return (
    <>
      <nav className={`navbar navbar-expand-sm navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shayan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="color-themes">
              <button className="theme" className="btn btn-primary" onClick={()=>{document.body.style.backgroundColor='#0d6efd';}}> </button>
              <button className="btn btn-danger" onClick={()=>{document.body.style.backgroundColor='#dc3545';}}> </button>
              <button className="btn btn-success" onClick={()=>{document.body.style.backgroundColor='#198754';}}> </button>
              <button className="btn btn-warning" onClick={()=>{document.body.style.backgroundColor='#ffc107';}}> </button> 
            </div>
            <div className={`form-check form-switch text-${mode==='light'? 'dark': 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {modeLabel}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
