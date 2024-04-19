import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Gopi,D.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Gopi D,</span> frontend developer based in India.
      </h1>
      <p>
        Results-Driven Frontend Developer with 2 Years of Experience | Expertise
        in Crafting Responsive and User-Friendly Web Interfaces | Proficient in
        HTML, CSS, JavaScript, React, Redux and Modern Frontend Frameworks |
        Strong Problem-Solving Skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a className="hero-resume" href="https://drive.google.com/file/d/1J9E5mgt3uA06N5PrcB2BDstRCor6312K/view?usp=sharing" target="_blank">My resume</a>
      </div>
    </div>
  );
};

export default Hero;
