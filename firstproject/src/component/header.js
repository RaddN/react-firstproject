import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div
          className="collapse navbar-collapse d-flex flex-row-reverse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
