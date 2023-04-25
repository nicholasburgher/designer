import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const myDate = new Date().getFullYear();
  console.log(myDate);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="footer">
      <div className="footer-section">
        <div className="footer_title">
          Nicholas Burgher
        </div>
        <div className="social">
          <a href="https://linkedin.com/in/nicholasburgher/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/social/icon_linkedin.svg"}
              alt="LinkedIn"
            />
          </a>
          <a href="https://facebook.com/nicholas.burgher" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/social/icon_facebook.svg"}
              alt="Facebook"
            />
          </a>
          <a href="https://dribbble.com/nicholasburgher" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/social/icon_dribbble.svg"}
              alt="Dribbble"
            />
          </a>
        </div>
      </div>
      <div className="footer-section">
        {location.pathname.includes("resume") ? '' : <a style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => navigate("../resume")}>Download Resume</a>}
        <div className="copyright">Copyright © {myDate}</div>
      </div>
    </section>
  )
}

export default Footer;