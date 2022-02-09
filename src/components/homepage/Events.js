import React from "react";
import EventInfo from "../../api/EventInfo";
import WorkshopInfo from "../../api/WorkshopInfo";
import EventBG from "../../assets/backgrounds/Events-bg.png";
import WorkshopsBG from "../../assets/backgrounds/Workshops-bg.png";
import SpectraImg from "../../assets/elements/Spectra.png";

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
            Skecthing, painting, doodling, vegetable carving, tattoo making,
            mask making, exciting events, talk shows with famous artists,
            amazing prizes and lots more fun; This is the annual fest of Fine
            Arts Society : SPECTRA. So, get ready for a weekend full of creative
            action and beautiful memories. Stay tuned for further updates.
          </p>
          {/* <NavLink to="/spectra">Spectra Page</NavLink> */}
          <span className="Spectra-btn">Coming soon</span>
        </div>

        <img src={SpectraImg} alt="Spectra Poster" />
      </div>

      <div style={workshopBg} className="Workshops-container">
        <h2>Workshops</h2>

        <div className="Workshops-grid">
          {WorkshopInfo.map((event, index) => (
            <div className="Workshop-card">
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
