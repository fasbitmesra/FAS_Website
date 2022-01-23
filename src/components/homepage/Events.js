import React from "react";
import EventInfo from "../../api/EventInfo";
import WorkshopInfo from "../../api/WorkshopInfo";
import EventBG from "../../assets/backgrounds/Events-bg.png";
import WorkshopsBG from "../../assets/backgrounds/Workshops-bg.png";
import { NavLink } from "react-router-dom";

function Events() {
  const workshopBg = {
    backgroundImage: `url(${WorkshopsBG})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: "30px 0",
    margin: "60px 0",
  };

  return (
    <>
      <div className="Events-container" id="events">
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

      <div style={workshopBg} className="Workshops-container">
        <h2>Workshops</h2>

        <div className="Workshops-grid">
          {WorkshopInfo.map((event, index) => (
            <div className="Workshop-card">
              <img src={event.image} alt={event.title} />
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
