import React from "react";
import "./contact.css";
import Map from '../components/Map/Map';
import { BsFillHeartFill } from "react-icons/bs";


const location = {
  address: 'Strada Chitarei, Bucuresti',
  lat: 44.422188,
  lng: 26.1353419,
}


export const Contact = () => {
  return (
    <div>
      <h1 className="text">Contact</h1>
      <Map location={location} zoomLevel={19} />
      <div className="contactdiv">
        <p className="contact-text">
          <BsFillHeartFill />
          Strada Chitarei, București
        </p>
        <p className="contact-text">
          <BsFillHeartFill />
          Telefon : +40 787 400 999
        </p>
        <a href="https://wa.me/+40787400999" className="wapp">
          <BsFillHeartFill />
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/nailsbyastrid_-101801234866514/"
          className="wapp"
        >
          <BsFillHeartFill />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/nails.by.astrid_/?hl=en"
          className="wapp"
        >
          <BsFillHeartFill />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
