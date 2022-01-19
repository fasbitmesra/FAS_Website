import React from "react";
import EventInfo from "../../api/EventInfo";
import Background from "../../assets/backgrounds/Events-bg.png";

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
      <img className="Events-bg" src={Background} alt="Background" />
    </>
  );
}

export default Events;
