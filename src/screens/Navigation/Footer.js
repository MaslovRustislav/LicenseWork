import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="min-h-full flex justify-between flex-wrap py-5 px-3 w-full bg-black">
      <div className="flex flex-col">
        <h2 className="text-white border-b-2 m-2">Join Us</h2>
        <div className="flex space-x-5 w-full">
          <div className="footerIcon ml-2"></div>
          <div className="footerIcon"></div>
          <div className="footerIcon"></div>
          <div className="footerIcon "></div>
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
