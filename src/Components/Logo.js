// src/components/Logo.js
import React from 'react';
import LogoImage from "../SpiderBuddies.png"
const Logo = () => {
  return (
    <div className="logo">
      {/* Update the path for the logo file */}
      <img src={LogoImage} width={75} alt="Spider Logo" />
    </div>
  );
};

export default Logo;
