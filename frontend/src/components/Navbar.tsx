import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../assets/home-img.png';
import HamburgerMenuImg from '/src/assets/hamburger-menu.png';
import '/src/styles/Navbar.css';

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const NavItems = [
    "Work",
    "Projects",
    "Hobbies",
    "Faith"
  ];

  return (
    <>
    {/* Horizontal top navbar */}
      <nav className="nav-bar">
        <Link to="/" className="home-button">
          <img src={HomeImg} alt="Go to home page" className="home-icon" />
        </Link>
        <div className="nav-table">
          <div className="nav-item">
            <Link to="/work" className="nav-link work-link">
              {NavItems[0]}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/projects" className="nav-link projects-link">
              {NavItems[1]}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/hobbies" className="nav-link hobbies-link">
              {NavItems[2]}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/faith" className="nav-link faith-link">
              {NavItems[3]}
            </Link>
          </div>
        </div>

        {/* Expandable side navbar for narrow windows */}
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
              <Link to="/work" className="menu-link">
                {NavItems[0]}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/projects" className="menu-link">
                {NavItems[1]}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/hobbies" className="menu-link">
              {NavItems[2]}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/faith" className="menu-link">
              {NavItems[3]}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Position of navbar is fixed and does not take space.
      Spacer takes space so pages start below the navbar
      instead of under the navbar. */}
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;