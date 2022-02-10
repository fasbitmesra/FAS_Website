import React from "react";
import { NavLink } from "react-router-dom";
import { Row1 } from "../../assets/homepage gallery";

function Slider() {
  return (
    <>
      <div className="Slider-container">
        <div className="Slider-row">
          {Row1.map((image, index) => (
            <img src={image} alt={index} key={index} />
          ))}
        </div>
        <div className="Slider-btn">
          <NavLink to="/gallery">Go to Gallery</NavLink>
        </div>
      </div>
    </>
  );
}

export default Slider;
