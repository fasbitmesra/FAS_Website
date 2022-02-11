import React, { useState } from "react";
import Logo from "../assets/elements/FAS_logo(white).png";
import { NavHashLink as NavLink } from "react-router-hash-link";
import "./Navbar.scss";
import { HiOutlineMenuAlt3, HiOutlineChevronDoubleRight } from "react-icons/hi";
import { IconContext } from "react-icons";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <div className="Navbar-container">
        <img src={Logo} alt="FAS Logo" />
        <ul className={hamburgerOpen ? "Show-menu" : ""}>
          <li>
            <NavLink smooth to="/#" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              to="/#events"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              to="/#team"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="Hamburger" onClick={toggleHamburger}>
          <IconContext.Provider value={{ className: "Hamburger-icons" }}>
            {hamburgerOpen ? (
              <HiOutlineChevronDoubleRight />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}

export default Navbar;
