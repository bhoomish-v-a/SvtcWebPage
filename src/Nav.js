import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-3" style={{ backgroundColor: "#2C3E50" }}>
        <img
          src="/images/svtc.jpg"
          alt="Logo"
          width="100"
          height="60"
          className="d-inline-block align-text-top px-2"
        />
        <a className="navbar-brand text-light fw-bold" href="/">
          Electrical & Hardware Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="/electrical"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: "#34495E" }}>
                <li>
                  <a className="dropdown-item text-light" href="/electrical">
                    Electrical items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="/electrical">
                    Paint
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="/electrical">
                    Hardware
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="/electrical">
                    Plumbing items
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "#34495E", color: "#ECF0F1", border: "none" }}
            />
            <button className="btn btn-warning fw-bold" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
