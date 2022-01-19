import React from "react";
import EventInfo from "../../api/EventInfo";
import EventBG from "../../assets/backgrounds/Events-bg.png";
import { NavLink } from "react-router-dom";

function Events() {
  return (
    <>
      <div className="Events-container">
        <h1>Events</h1>

        <div className="Events-grid">
          <div className="Events-row">
            {EventInfo.map((event, index) => (
              <div className="Events-card">
                <img src={event.image} alt={event.title} />
                <p>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img className="Events-bg" src={EventBG} alt="Background" />

      <div className="Spectra-section">
        <div className="Spectra-text">
          <h2>Spectra</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <NavLink to="/spectra">Spectra Page</NavLink>
        </div>

        <img src="" alt="..." />
      </div>
    </>
  );
}

export default Events;
