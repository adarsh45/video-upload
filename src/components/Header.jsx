import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">
        A&nbsp;N&nbsp;P&nbsp;R&nbsp;S
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link active" href="/upload">
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/live">
              Live
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
