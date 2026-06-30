import React from "react";
import "./Navbar.css";

export default function Navbar({
  title = "Set title here",
  aboutText = "Set text here",
}) {
  
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn  border-0" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
