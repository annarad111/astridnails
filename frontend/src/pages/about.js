import React from "react";
import './about.css';
import nailsastrid11 from '../images/nailsastrid11.jpeg'
import { BsFillHeartFill } from "react-icons/bs";
import nailsastrid2 from '../images/nailsastrid2.jpeg'

export const About = () => {
  return (
    <div>
      <h1 className="text">Despre</h1>
      <div className="about">
        <div data-aos="zoom-in">
          <img src={nailsastrid11} className="img-about"></img>
        </div>
        <p className="text-up">
          Numele meu este Astrid Ciocan, activez în domeniul de manichiură \
          pedichiură , stilist protezist de 5 ani .<br></br> Este o meserie pe
          care o fac cu toată plăcerea! Pentru ca plăcerea muncii aduce
          perfecțiunea acesteia. În acești ani am urmat cursuri profesionale,
          atât fizice, cât și online.<br></br> Pentru că meseria aceasta a
          evoluat foarte mult.<br></br>
          Scopul meu în postura de manichiuristă este sa realizez lucrări
          impecabile, perfecte și rezistente,clienetele mele sa plece cu
          zâmbetul pe buze de la mine. <br></br> Așadar, dacă îți doresti să
          faci o schimbare la manichiura \ pedichiura ta, eu sunt aici și abia
          aștept să ne cunoastem.
        </p>
        <h1 className="advice">Sfaturi pentru întreținere acasă</h1>
        <div data-aos="fade-right">
          <p className="text-up">
          Vreau să știți că unghiile au nevoie și de îngrijirea voastră, nu doar a tehnicianului. Uitați câteva sfaturi care vă pot ajuta:
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Când folosiți produse toxice de curățare este foarte important să folosiți mănuși, vă ajutați unghiile cât și pielea de pe mâini.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Nu încercați să vă tăiați cuticula acasă, sau mai rău să o rupeți, pot apărea infecții grave.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Nu vă mâncați lateralele ( am mai întâlnit cazuri ), puteți să
            faceți onicoliză.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Nu vă îndepărați singure materialul de pe unghii, riscați să vă
            traumatizați unghia.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Folosiți zilnic ulei pentru cuticule și cremă de mâini, oferiți-le
            mâinilor voastre hidratatea de care au nevoie.
          </p>
          <BsFillHeartFill />
          <p className="text-up">
          Întreținerea la unghii se face la maxim 4 săptămâni, pentru că nu
            materialul strică unghia, ci întrețiinerile peste 4 săptămâni.
          </p>
          <BsFillHeartFill />
        </div>
      </div>
    </div>
  );
};

export default About;
