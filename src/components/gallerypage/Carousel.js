import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ title, images }) {
  const scrl = useRef();

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };

  return (
    <>
      <div className="Carousel-container">
        <h2>{title}</h2>
        <div className="Carousel-row" ref={scrl}>
          {images.map((image, index) => (
            <img src={image} alt={index} />
          ))}
        </div>
        <div className="Carousel-left Carousel-control">
          <FaChevronLeft onClick={() => slide(-250)} />
        </div>
        <div className="Carousel-right Carousel-control">
          <FaChevronRight onClick={() => slide(+250)} />
        </div>
      </div>
    </>
  );
}

export default Carousel;
