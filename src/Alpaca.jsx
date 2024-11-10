import React from "react";
import "./Alpaca.css";

function Alpaca(){

    const defaultAccessories = "../public/assests/alpaca/accessories/headphone.png";
    const defaultBackground = "/public/assests/alpaca/backgrounds/blue50.png";
    const defaultEars = "../public/assests/alpaca/ears/default.png";
    const defaultEyes = "../public/assests/alpaca/eyes/default.png";
    const defaultHair = "../public/assests/alpaca/hair/default.png";
    const defaultLeg = "../public/assests/alpaca/leg/default.png";
    const defaultMouth = "../public/assests/alpaca/mouth/default.png";
    const defaultNeck = "../public/assests/alpaca/neck/default.png";
    const defaultNose = "../public/assests/alpaca/nose.png"
    
    return (
      <div className="alpaca-card">
        <h1 className="card-title">ALPACA GENERATOR</h1>
        <div className="alpaca-content">
          <img src={defaultBackground} alt="Default Background" className="layer Background"/>
          <img src={defaultAccessories} alt="Default Accessory" className="layer accessories"/>
          <img src={defaultEars} alt="Default Ears" className="layer ears"/>
          <img src={defaultEyes} alt="Default Eyes" className="layer eyes"/>
          <img src={defaultHair} alt="Default Hair" className="layer hair"/>
          <img src={defaultLeg} alt="Default Leg" className="layer leg"/>
          <img src={defaultMouth} alt="Default Mouth" className="layer mouth"/>
          <img src={defaultNeck} alt="Default Neck" className="layer neck"/>
          <img src= {defaultNose} alt = "Default Nose" className="layer nose"/>
        </div>
      </div>
      );
}

export default Alpaca;