import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navHeight">
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
            <Link to="/categories">
              <li class="nav-item active">
                <p class="nav-link" href="#">
                  Choose a Category <span class="sr-only">(current)</span>
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
