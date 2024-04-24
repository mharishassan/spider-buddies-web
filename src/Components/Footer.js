import React from "react";
import "./Footer.css";
import SB from "../SpiderBuddies.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
          <img src={SB} width={100} alt="Spider Logo" />
        </div>
      <div className="containerfooter">
        <p>&copy; 2024 Spider Buddies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
