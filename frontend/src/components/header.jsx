import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <a className="navbar-brand" href="/">
        React-Django CRUD App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Customer list <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/createUpdate/`}>
              Create Customer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
