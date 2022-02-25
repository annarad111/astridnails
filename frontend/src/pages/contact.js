import React from "react";
import "./contact.css";
import Map from '../components/Map/Map';


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
        <p className="contact-text">
          Adresa: <br /> Strada Chitarei
          <br />
          Bucuresti
          <br /> Sector 3
        </p>
    </div>
  );
};
//indicatii de a ajunge cat mai repede de la metrou etc.
export default Contact;
