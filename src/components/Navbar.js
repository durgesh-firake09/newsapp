import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/top-headlines/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/top-headlines/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/entertainment"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/business"
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/general"
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/health"
                      >
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/science"
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/sports"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/top-headlines/technology"
                      >
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <form
                className="d-flex"
                style={{ position: "absolute", right: "17px" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="query"
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={this.searchDOM}
                >
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
