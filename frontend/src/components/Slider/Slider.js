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



const Slider = () => {
    return (
      <div className="item">
        <video autoplay="autoplay" loop="loop" muted="muted" className="videosslider">
          <source src={slidervideo} type="video/mp4" />
        </video>
      </div>
    );
}

export default Slider;