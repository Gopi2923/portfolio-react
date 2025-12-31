import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Throttle function for scroll handler
  const throttle = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navRef} role="navigation" aria-label="Main navigation">
      {/* Text-based logo instead of image */}
      <div className="nav-logo">
        <AnchorLink href="#home" offset={50} className="logo-wrap" aria-label="Go to home">
          <span className="js-badge" aria-label="JavaScript">JS</span>
          <h2 className="logo-text">
            <span>GOPI</span> D
          </h2>
        </AnchorLink>
      </div>

      <button
        onClick={openMenu}
        className="nav-mob-open"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
      >
        <img src={menu_open} alt="" aria-hidden="true" />
      </button>

      <ul ref={menuRef} id="nav-menu" className="nav-menu" role="menubar">
        <li className="nav-mob-close-wrapper">
          <button
            onClick={closeMenu}
            className="nav-mob-close"
            aria-label="Close navigation menu"
          >
            <img src={menu_close} alt="" aria-hidden="true" />
          </button>
        </li>

        {["home", "about", "experience", "projects", "contact"].map((item) => (
          <li key={item} role="none">
            <AnchorLink
              className={`anchor-link ${activeSection === item ? 'active' : ''}`}
              offset={50}
              href={`#${item}`}
              role="menuitem"
              onClick={() => closeMenu()}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
            {activeSection === item && <div className="nav-underline" aria-hidden="true"></div>}
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <ThemeToggle />
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact" aria-label="Connect with me">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
