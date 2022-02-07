import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import nails1 from '../../images/nails6.jpg'
import nails2 from '../../images/nails7.jpg'
import nails3 from '../../images/nails8.jpg'
import nails4 from "../../images/nails9.jpg";
import nails5 from "../../images/nails10.jpg";
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
    <img src={nails4} className="sliderimg" />
  </div>,
  <div className="item" data-value="5">
    <img src={nails5} className="sliderimg" />
  </div>,
];

export const Slider = () => {
    return (
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={2000}
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