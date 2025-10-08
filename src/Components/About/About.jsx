import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <section id="about" className="about">
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      {/* About Content */}
      <div className="about-sections">
        <div className="about-left-text">
          <h2 className="about-highlight">Who I Am</h2>
          <p>
            I’m a <strong>Frontend Developer</strong> with 3.5 years of hands-on
            experience building responsive and dynamic web applications. I love
            turning design ideas into interactive user experiences using{" "}
            <strong>React.js</strong>, <strong>Redux</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>Next.js</strong>.
          </p>
          <p>
            I’m passionate about writing clean, maintainable code and constantly
            learning new technologies to improve both performance and design. I
            believe that great products are built through a balance of
            creativity, logic, and usability.
          </p>
        </div>

        {/* Skills */}
        <div className="about-right">
          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="about-skill">
              <p>HTML & CSS</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="about-skill">
              <p>Next.js</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "50%" }}></div>
              </div>
            </div>
            
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "70%" }}></div>
              </div>
            </div>

              <div className="about-skill">
              <p>Git & Github </p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "75%" }}></div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default About;
