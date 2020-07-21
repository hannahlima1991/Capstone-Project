import React from "react";
import "./about.css";
import Django from "../assets/Django.jpeg";
import hannah from "../assets/hannah.png";
import steve from "../assets/steve.jpg";
import link from "../assets/link.svg";
import Navbar from "../Navbar";

function About() {
  return (
    <div className="App">
      <Navbar />
      <div className="aboutWrapper container">
        <div className="aboutUs">
          <h1>About Us</h1>
          <h3>Spotibae was made by music lovers for music lovers.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card cardMargin">
              <img class="card-img-top" src={Django} alt="Card image cap" />
              <div class="card-body categoryName">
                <h5 class="card-title">Django Kerger</h5>
                <h5 class="card-title">Software Engineer </h5>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/django-kerger-5a1a081a8/"
                >
                  <img className="linkdIn" src={link} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cardMargin">
              <img class="card-img-top" src={hannah} alt="Card image cap" />
              <div class="card-body categoryName">
                <h5 class="card-title">Hannah Lima </h5>
                <h5 class="card-title">Software Engineer </h5>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hannah-lima-aba4b7197/"
                >
                  <img className="linkdIn" src={link} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cardMargin">
              <img class="card-img-top " src={steve} alt="Card image cap" />
              <div class="card-body third categoryName">
                <h5 class="card-title">Steve Medrano</h5>
                <h5 class="card-title">Software Engineer </h5>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/steve-medrano/"
                >
                  <img className="linkdIn" src={link} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
