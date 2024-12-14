import React, { useState } from "react";
import "./Alpaca.css";

function Alpaca() {
  const defaultPath = "../public/assests/alpaca/";
  const defaultAccessories =
    "../public/assests/alpaca/accessories/headphone.png";
  const defaultBackground = "/public/assests/alpaca/backgrounds/blue50.png";
  const defaultEars = "../public/assests/alpaca/ears/default.png";
  const defaultEyes = "../public/assests/alpaca/eyes/default.png";
  const defaultLeg = "../public/assests/alpaca/leg/default.png";
  const defaultMouth = "../public/assests/alpaca/mouth/default.png";
  const defaultNeck = "../public/assests/alpaca/neck/default.png";
  const defaultNose = "../public/assests/alpaca/nose.png";

  const hairStyles = [
    "default",
    "bang",
    "curls",
    "elegant",
    "fancy",
    "quiff",
    "short",
  ];
  const [currentHair, setCurrentHair] = useState(hairStyles[0]);
  const [showHairOptions, setShowHairOptions] = useState(false);

  const toggleHairOptions = () => {
    setShowHairOptions((prev) => !prev);
    console.log("hair options", showHairOptions);
  };

  const changeHair = (style) => {
    setCurrentHair(style);
    console.log("Hair style changed ", style);
  };

  return (
    <div className="alpaca-card">
      <h1 className="card-title">ALPACA GENERATOR</h1>

      <div className="alpaca-layout">
        <div className="alpaca-content">
          <img
            src={defaultBackground}
            alt="Default Background"
            className="layer Background"
          />
          <img
            src={defaultAccessories}
            alt="Default Accessory"
            className="layer accessories"
          />
          <img src={defaultEars} alt="Default Ears" className="layer ears" />
          <img src={defaultEyes} alt="Default Eyes" className="layer eyes" />
          <img
            src={defaultPath + `hair/${currentHair}.png`}
            alt="Default Hair"
            className="layer hair"
          />
          <img src={defaultLeg} alt="Default Leg" className="layer leg" />
          <img src={defaultMouth} alt="Default Mouth" className="layer mouth" />
          <img src={defaultNeck} alt="Default Neck" className="layer neck" />
          <img src={defaultNose} alt="Default Nose" className="layer nose" />
        </div>

        <div className="contents">
          <div className="alpaca-accessories">
            <h2>Accessorize The Alpaca's</h2>

            <div className="hair-options-container">
              <button
                onClick={toggleHairOptions}
                className="toggle-hair-button"
              >
                {" "}
                Hair{" "}
              </button>
            </div>
          </div>

          <div className="style">
            <h2> Style</h2>

            {showHairOptions && (
              <div className="hair-options">
                {hairStyles.map((style) => (
                  <button
                    className="hair-option"
                    key={style}
                    onClick={() => changeHair(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alpaca;
