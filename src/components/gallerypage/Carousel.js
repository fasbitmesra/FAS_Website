import React from "react";

function Carousel({ title, images }) {
  return (
    <>
      <div className="Slider-container">
        <h2>{title}</h2>
        <div className="Slider-row">
          {images.map((image, index) => (
            <img src={image} alt={index} />
          ))}
        </div>

        <div className="Slider-btn"></div>
      </div>
    </>
  );
}

export default Carousel;
