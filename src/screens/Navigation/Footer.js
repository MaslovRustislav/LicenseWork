import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerIconContainer">
        <h2>Alatura-te</h2>
        <div>
          <div className="footerIcon"></div>
          <div className="footerIcon"></div>
          <div className="footerIcon"></div>
          <div className="footerIcon"></div>
        </div>
      </div>


      

      <div className="dealsContainer">
        <h2>Cumparati cu comfort</h2>
        <div>
          <p>Promotii</p>
          <p>Credite</p>
          <p>Rate</p>
          <p>Metode de plata</p>
        </div>
      </div>
      <div className="offerContainer">
        <h2>Cu placere de la cumparatura</h2>
        <div>
          <p>Instalarea si conectare</p>
          <p>reaparatii si servicii</p>
          <p>Tehnica cu pret redus</p>
          <p>Informatia pentru consumator</p>
        </div>
      </div>
      <div className="aboutUsContainer">
        <h2>Aflati mai mult despre noi</h2>
        <div>
          <p>Despre companie</p>
          <p>Despre Brand</p>
          <p>Misiune si valori</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
