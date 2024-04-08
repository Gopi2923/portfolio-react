import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return <div className="hero">
       <img src={profile_img} alt="" />
       <h1><span>I'm Gopi D,</span> frontend developer based in India.</h1>
       <p>Results-Driven Frontend Developer with 2 Years of Experience | Expertise in Crafting Responsive and User-Friendly Web Interfaces | Proficient in HTML, CSS, JavaScript, React, Redux and Modern Frontend Frameworks | Strong Problem-Solving Skills.</p>
       <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
       </div>
  </div>;
};

export default Hero;
