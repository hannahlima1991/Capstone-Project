import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="navbar-brand" href="#">
          Spotibae
        </p>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/">
              <li class="nav-item active">
                <p class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </p>
              </li>
            </Link>
            <Link to="/register">
              <li class="nav-item">
                <p class="nav-link" href="#">
                  Register
                </p>
              </li>
            </Link>

            <li class="nav-item dropdown">
              <p
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </p>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/login">
                  <p class="dropdown-item" href="#">
                    Login
                  </p>
                </Link>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
