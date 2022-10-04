import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>@Copyright 2022 by Kluks</div>
        <div>
          <FontAwesomeIcon style={{marginRight:"20px"}}icon={faTelegram} size="2x"/>
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
