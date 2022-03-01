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
            <p>Manichiura oja semi | 120 lei || 1h 30 min</p>
            <p>Pedichiura oja semi | 150 lei || 1h 30 min</p>
            <p>Intretinere gel | 150 lei || 2h</p>
            <p>Constructie gel | 230 lei || 3h</p>
            <p>Curatare manichiura | 90 lei || 1h </p>
            <p>Curatare pedichiura | 90 lei || 1h </p>
            <p>Intretinere gel cu schimbare de arhitectura | 180 lei || 3h </p>
            <p>Constructie Slim | 250 lei || 3h 30 min </p>
            <p>Intretinere Slim | 200 lei || 2h 30 min </p>
            <div data-aos="zoom-in">
              <a href="tel:+40787400999" className="services-btn">
                Suna acum!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
