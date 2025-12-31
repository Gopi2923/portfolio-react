import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/Gopi,D.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const roles = [
  "Frontend Developer",
  "React Developer",
  "JavaScript Enthusiast"
]

const Hero = () => {

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(roles[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeoutId
    const full = roles[roleIndex]
    const current = displayText

    if (!isDeleting && current !== full) {
      timeoutId = setTimeout(() => setDisplayText(full.slice(0, current.length + 1)), 60)
    } else if (!isDeleting && current === full) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && current.length > 0) {
      timeoutId = setTimeout(() => setDisplayText(full.slice(0, current.length - 1)), 40)
    } else if (isDeleting && current.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }, 200)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isDeleting, roleIndex])

  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2 // -1..1
      const y = (e.clientY / innerHeight - 0.5) * 2
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (blob1Ref.current) blob1Ref.current.style.transform = `translate(${x * 12}px, ${y * 8}px)`
        if (blob2Ref.current) blob2Ref.current.style.transform = `translate(${x * -14}px, ${y * -10}px)`
        if (imgRef.current) imgRef.current.style.transform = `translate(${x * -6}px, ${y * -6}px)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-accents">
        <span ref={blob1Ref} className="blob blob-1" aria-hidden="true"></span>
        <span ref={blob2Ref} className="blob blob-2" aria-hidden="true"></span>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="reveal">
            Hi, I&apos;m <span className="highlight">Gopi D</span>
            <br />
            <span className="subtext typing" aria-live="polite">{displayText}</span> from India.
          </h1>

          <p className="hero-description reveal delay-1">
            A passionate <strong>Frontend Developer</strong> with 3.5 years of experience
            crafting responsive, interactive, and user-focused web interfaces.
            I specialize in <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Redux</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and
            modern frontend tools that bring designs to life.
          </p>

          <div className="hero-buttons reveal delay-2">
            <AnchorLink
              className="btn primary-btn pulse"
              offset={50}
              href="#contact"
              aria-label="Connect with me"
            >
              Connect With Me
            </AnchorLink>
            <a
              className="btn secondary-btn"
              href="https://drive.google.com/file/d/1JXP3bstC5k4o1mPiLp7XpOQfViiBJ9kW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume in new tab"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-image reveal delay-3">
          <img ref={imgRef} className="pop-in" src={profile_img} alt="Gopi D - Frontend Developer" loading="lazy" />
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
