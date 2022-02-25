import React from "react";
import './about.css'
import nailsastrid11 from '../images/nailsastrid11.jpeg'
import nailsastrid2 from '../images/nailsastrid2.jpeg'

export const About = () => {
  return (
    <div>
      <h1 className="text">About</h1>
      <div className="about">
        <div data-aos="zoom-in">
          <img src={nailsastrid11} className="img-about"></img>
        </div>
        <p className="text-up">
          Numele meu este Astrid Ciocan, activez in domeniul de manichiură \
          pedichiură , stilist protezist de 5 ani .<br></br> Este o meserie pe
          care o fac cu toată plăcerea! Pentru ca placerea muncii aduce
          perfectiunea acesteia. În acești ani am urmat cursuri profesionale,
          atât fizice, cât si online.<br></br> Pentru că meseria această a
          evoluat foarte mult.<br></br>
        </p>
      </div>
      <div className="about-down">
        <div data-aos="zoom-in">
          <img src={nailsastrid2} className="down-img"></img>
        </div>
        <p className="text-down">
          Scopul meu in postura de manichiuristă este sa realizez lucrări
          impecabile, perfecte si rezistente,clienetele mele sa plece cu
          zambetul pe buze de la mine. <br></br> Așadar, dacă iți doresti să
          faci o schimbare la manichiura \ pedichiura ta, eu sunt aici si abia
          astept sa ne cunoastem.
        </p>
      </div>
    </div>
  );
};

export default About;
