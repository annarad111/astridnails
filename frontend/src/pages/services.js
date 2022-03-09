import React from "react";
import "./services.css";
import services3 from '../images/services3.jpeg'
import history from "../history.js";

history.push("/");

export const Services = () => {
  return (
    <div>
      <h1 className="text">Servicii</h1>
      <div className="card">
        <div className="background-image">
          <h2 className="title">Price List</h2>
          <div className="interior">
            <p>Manichiură ojă semi | 120 lei || 1h 30 min</p>
            <p>Pedichiură ojă semi | 150 lei || 1h 30 min</p>
            <p>Întreținere gel | 150 lei || 2h</p>
            <p>Construcție gel | 210 lei || 3h</p>
            <p>Curațare manichiură | 90 lei || 1h </p>
            <p>Curațare pedichiură | 90 lei || 1h </p>
            <p>Întreținere gel cu schimbare de arhitectură | 180 lei || 3h </p>
            <p>Construcție Slim | 250 lei || 3h 30 min </p>
            <p>Întreținere Slim | 200 lei || 2h 30 min </p>
            <div data-aos="zoom-in">
              <a href="tel:+40787400999" className="services-btn">
                Sună acum!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
