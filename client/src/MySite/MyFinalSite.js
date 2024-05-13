import React from "react";
import "./myFinalSite.css";
import heroImg from "./hero-img.jpg";
import logo from "./logo.png";
import * as images from "./site-images";

const MyFinalSite = () => {
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

      <secion class="hero-wrapper" id="home">
        <header class="hero-section">
          <div class="triangle-shape bottom-left"></div>
          <img src={heroImg} className="bg-img" />
          <div class="container">
            <div class="content-wrapper">
              <h1>Transforming Spaces, Enhancing Lives</h1>
              <p>
                {" "}
                Synergyworks Pro brings a professional touch to every surface,
                leaving your space spotless and your mind at ease. Our dedicated
                team ensures meticulous cleanliness and exceptional service,
                tailored to your needs
              </p>
              <button class="btn-primary">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </secion>

      {/* BRAND SECTION */}
      <section class="brands-section">
        <div class="container">
          <img src={images.image1} width={"10%"} />
          <img src={images.image2} width={"5%"} />
          <img src={images.image3} width={"5%"} />
          <img src={images.image4} width={"10%"} />
          <img src={images.image5} width={"10%"} />
          <img src={images.image6} width={"10%"} />
        </div>
      </section>
    </div>
  );
};

export default MyFinalSite;
