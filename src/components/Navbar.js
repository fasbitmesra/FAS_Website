import React, { useState } from "react";
import Logo from "../assets/elements/FAS_logo(white).png";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { HiOutlineMenuAlt3, HiOutlineChevronDoubleRight } from "react-icons/hi";
import { IconContext } from "react-icons";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="Navbar-container">
        <img src={Logo} alt="FAS Logo" />
        <ul className={hamburgerOpen ? "Show-menu" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="About">About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="Events">Events</NavLink>
          </li>
          <li>
            <NavLink to="Team">Team</NavLink>
          </li>
          <li>
            <NavLink to="Contact">Contact</NavLink>
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
