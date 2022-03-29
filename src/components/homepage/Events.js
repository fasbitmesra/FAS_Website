import React from "react";
import EventInfo from "../../api/EventInfo";
import WorkshopInfo from "../../api/WorkshopInfo";
import EventBG from "../../assets/backgrounds/Events-bg.png";
import WorkshopsBG from "../../assets/backgrounds/Workshops-bg.png";
import SpectraImg from "../../assets/elements/Spectra.png";
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

  const cardBg = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  });

  return (
    <>
      <div className="Events-container" id="events">
        <h1>Events</h1>

        <div className="Events-grid">
          <div className="Events-row">
            {EventInfo.map((event) => (
              <div className="Events-card" key={event.title}>
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
            Sketching, painting, doodling, vegetable carving, tattooing, mask
            making, exciting events, talk shows with famous artists, incredible
            awards, and a whole lot more fun; this s the annual fest of Fine
            Arts Society : SPECTRA. So be ready for a weekend jam-packed with
            inspiration, creativity, wonderful memories and exciting activity.
          </p>
          <NavLink to="/spectra">Spectra Page</NavLink>
          {/* <span className="Spectra-btn">Coming soon</span> */}
        </div>

        <img src={SpectraImg} alt="Spectra Poster" />
      </div>

      <div style={workshopBg} className="Workshops-container">
        <h2>Workshops</h2>

        <div className="Workshops-grid">
          {WorkshopInfo.map((event) => (
            <div className="Workshop-card" key={event.title}>
              <div style={cardBg(event.image)} className="Workshop-img">
                <img src={event.image} alt={event.title} className="content" />
              </div>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
