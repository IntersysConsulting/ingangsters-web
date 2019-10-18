import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="img-one-carousel"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="img-two-carousel"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="img-three-carousel"></div>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
