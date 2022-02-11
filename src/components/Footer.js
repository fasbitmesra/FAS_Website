import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import FasSocialInfo from "../api/FasSocialInfo";
import "./Footer.scss";

function Footer() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <div className="Footer-bg">
        <div className="Footer-conatiner">
          <div className="Footer-head">
            <h1>Fine Arts Society</h1>
            <h3>BIT Mesra</h3>
          </div>
          <div className="Footer-menu">
            <h3>Menu</h3>
            <div className="Footer-menu-col">
              <ul className="Footer-links">
                <li>
                  <NavLink smooth to="/#">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink smooth scroll={scrollWithOffset} to="/#about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink smooth scroll={scrollWithOffset} to="/#team">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink smooth scroll={scrollWithOffset} to="/#contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="Footer-links">
                <li>
                  <NavLink smooth scroll={scrollWithOffset} to="/#events">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/#">Spectra</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-social">
            <h3>Social Media</h3>
            <div className="Social-icon-container">
              {FasSocialInfo.map((social) => {
                const { name, link, icon } = social;
                return (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={name}
                  >
                    <div className="Social-icon">{icon}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
