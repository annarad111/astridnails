import React from "react";
import './about.css'
import nailsastrid11 from '../images/nailsastrid11.jpeg'
import { BsFillHeartFill } from "react-icons/bs";
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
          Scopul meu in postura de manichiuristă este sa realizez lucrări
          impecabile, perfecte si rezistente,clienetele mele sa plece cu
          zambetul pe buze de la mine. <br></br> Așadar, dacă iți doresti să
          faci o schimbare la manichiura \ pedichiura ta, eu sunt aici si abia
          astept sa ne cunoastem.
        </p>
        <h1 className="advice">Sfaturi</h1>
        <div data-aos="fade-right">
          <p className="text-up">
            Fetelor, vreau sa mai stiti ca unghiile au nevoie și de îngrijirea
            voastra, nu doar a tehnicianului. Uitați cateva sfaturi care va pot
            ajuta:
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Cand folositi produse toxice de curatare este foarte important sa
            folositi manusi, va ajutati unghiile cat si pielea de pe maini.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Nu incercati sa va taiati cuticula acasa, sau mai rau sa o rupeti,
            pot aparea infectii grave.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Nu va mancati lateralele ( am mai intalnit cazuri ), puteti sa
            faceti onicoliza.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Nu vă îndeparati singure materialul de pe unghii, riscati sa va
            traumatizati unghia.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Folositi zilnic ulei pentru cuticule si crema de maini, oferiti-le
            mainilor voastre hidratatea de care au nevoie.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
            Întreținerea la unghii se face la maxim 4 saptamani, pentru ca nu
            materialul strica unghia, ci intretiinerile peste 4 saptamâni.
          </p>
          <BsFillHeartFill />
        </div>
      </div>
    </div>
  );
};

export default About;
