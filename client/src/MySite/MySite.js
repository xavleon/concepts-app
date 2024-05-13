import React from "react";
import "./MySite.css";
import logo from "./logo.png";
import heroImg from "./hero-img.jpg";

const MySite = () => {
  return (
    <div>
      {/* WEBSITE NAVBAR */}
      <nav class="site-navbar">
        <div class="container">
          <div class="content-wrapper">
            <div class="logo">
              <h1 className="main-title has-circle" style={{ margin: "100px" }}>
                Synergyworks Pro
              </h1>
            </div>
            <div class="right-side">
              <ul class="nav-links">
                <li>
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#works" className="nav-link">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#blog" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div class="nav-actions"></div>
            </div>
          </div>
        </div>
      </nav>
      {/* HERO SECTION */}
      <secion class="her-wrapper" id="home">
        <header class="hero-section">
          <div class="triangle-shape bottom-left"></div>
          <img src="" className="bg-img" />
          <div class="container">
            <div class="content-wrapper">
              <h1>Transforming Spaces, Enhancing Lives</h1>
              <p>
                Synergyworks Pro brings a professional touch to every surface,
                leaving your space spotless and your mind at ease. Our dedicated
                team ensures meticulous cleanliness and exceptional service,
                tailored to your needs
              </p>
              <button class="btn-primary">View Project</button>
            </div>
          </div>
        </header>
      </secion>
    </div>
  );
};

export default MySite;
