import React, { useEffect } from "react";
import Footer from "./Footer";
import "./Spectra.scss";
import { NavLink } from "react-router-dom";
import BG from "../assets/backgrounds/Spectra-bg.png";
import Logo from "../assets/elements/Spectra-logo.png";
import Date from "../assets/elements/Date.png";
import FASLogo from "../assets/elements/FAS_logo(black).png";

function Spectra() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className="Spectra-bg"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="Spectra-Nav">
          <img src={FASLogo} alt="FAS" />
          <NavLink to="/">Back to Homepage</NavLink>
        </div>

        <div className="Spectra-container">
          <div className="Spectra-head">
            <img src={Logo} alt="Spectra" className="Spectra-Logo" />
            <img src={Date} alt="11 - 13 March" className="Spectra-Date" />
          </div>
          <div className="Spectra-Trailer">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/nA6ZioB7cfU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Spectra;
