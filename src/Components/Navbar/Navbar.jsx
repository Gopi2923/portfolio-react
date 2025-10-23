import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            setMenu(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      {/* Text-based logo instead of image */}
      <div className="nav-logo">
        <div className="logo-wrap">
        <span className="js-badge" aria-label="JavaScript">JS</span>

          <h2 className="logo-text">
            <span>GOPI</span> D
          </h2>
        </div>
      </div>

      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu open"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu close"
          className="nav-mob-close"
        />

        {["home", "about", "experience", "projects", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className={`anchor-link ${activeSection === item ? 'active' : ''}`}
              offset={50}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
            {activeSection === item && <div className="nav-underline"></div>}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
