import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '/src/assets/home-img.png';
import HamburgerMenuImg from '/src/assets/hamburger-menu.png';
import '/src/styles/Navbar.css';

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="nav-bar">
      <Link to="/" className="home-button">
        <img src={HomeImg} alt="Go to home page" className="home-icon" />
      </Link>
      <div className="nav-table">
        <div className="nav-item">
          <Link to="/" className="nav-link about-me-link">
            About Me
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/previous-work" className="nav-link previous-work-link">
            Previous Work
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/projects" className="nav-link projects-link">
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/contact" className="nav-link contact-link">
            Contact
          </Link>
        </div>
      </div>

      <div className="menu-div">
        <button
          type="button"
          className="nav-menu-btn"
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          <img
            src={HamburgerMenuImg}
            alt="Expand the navigation bar"
            className="menu-icon"
          />
        </button>
        <ul className={'expanded-menu ' + (menuExpanded ? '' : 'hidden')}>
          <li className="menu-item">
            <Link to="/" className="menu-link">
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/previous-work" className="menu-link">
              Previous Work
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/projects" className="menu-link">
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;