import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Gopi,D.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Gopi D</span>
            <br />
            <span className="subtext">Frontend Developer</span> from India.
          </h1>

          <p className="hero-description">
            A passionate <strong>Frontend Developer</strong> with 3.5 years of experience
            crafting responsive, interactive, and user-focused web interfaces.
            I specialize in <strong>React.js</strong>, <strong>Redux</strong>, and
            modern frontend tools that bring designs to life.
          </p>

          <div className="hero-buttons">
            <AnchorLink
              className="btn primary-btn"
              offset={50}
              href="#contact"
            >
              Connect With Me
            </AnchorLink>
            <a
              className="btn secondary-btn"
              href="https://drive.google.com/file/d/1NsoY9k6ieTwxEzPfzXHiMDhSIi_BOfIQ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile_img} alt="Gopi D" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
