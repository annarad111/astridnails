import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import nailsa1 from '../../images/nailsa1.jpeg'
import nailsa2 from '../../images/nailsa2.jpeg'
import nailsa3 from '../../images/nailsa3.jpeg'
import nailsa4 from "../../images/nailsa4.jpeg";
import nailsa5 from "../../images/nailsa5.jpeg";
import slidervideo from "../../videos/slidervideo.mp4"
import '../Slider/slider.css'

        
        

const items = [
  <div className="item" data-value="1">
    <video autoPlay loop muted className="sliderimg">
      <source src={slidervideo} type="video/mp4" />
    </video>
  </div>,
  // <div className="item" data-value="2">
  //   <img src={nailsa2} className="sliderimg" />
  // </div>,
  // <div className="item" data-value="3">
  //   <img src={nailsa3} className="sliderimg" />
  // </div>,
  // <div className="item" data-value="4">
  //   <img src={nailsa4} className="sliderimg" />
  // </div>,
  // <div className="item" data-value="5">
  //   <img src={nailsa5} className="sliderimg" />
  // </div>,
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