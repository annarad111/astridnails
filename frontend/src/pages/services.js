import React from "react";
import "./services.css";

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
            <p>Constructie gel | 210 lei || 3h</p>
            <p>Curatare manichiura | 90 lei || 1h </p>
            <p>Curatare pedichiura | 90 lei || 1h </p>
            <div data-aos="zoom-in">
              <a href="tel:0735131140" className="services-btn">
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
