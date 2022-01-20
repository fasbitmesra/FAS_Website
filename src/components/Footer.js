import React from "react";
import { NavLink } from "react-router-dom";
import FasSocialInfo from "../api/FasSocialInfo";
import "./Footer.scss";

function Footer() {
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
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/team">Team</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
              <ul className="Footer-links">
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/spectra">Spectra</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-social">
            <h3>Social Media</h3>
            <div className="Social-icon-container">
              {FasSocialInfo.map((social, index) => {
                const { link, icon } = social;
                return (
                  <a href={link} target="_blank" rel="noopener noreferrer">
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
