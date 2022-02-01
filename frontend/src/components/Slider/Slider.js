import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import nails1 from '../../images/nails1.jpg'
import nails2 from '../../images/nails2.jpg'
import nails3 from '../../images/nails3.jpg'
import '../Slider/slider.css'

        
        

const items = [
  <div className="item" data-value="1">
    <img src={nails1} className="sliderimg" />
  </div>,
  <div className="item" data-value="2">
    <img src={nails2} className="sliderimg" />
  </div>,
  <div className="item" data-value="3">
    <img src={nails3} className="sliderimg" />
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

export const Slider = () => {
    return (
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    );
};

export default Slider;