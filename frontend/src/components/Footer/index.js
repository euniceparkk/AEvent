import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="quote">"People make events into stories. Stories give events meaning." -Scarlett Thomas</div>
        <div className="copyright">© AEvent 2021</div>
        {/* <img src={icon} alt="greenbnb icon" id="icon" /> */}
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/euniceparkk/" target="_blank" rel="noreferrer">
            <div className="connect">
              Connect with the developer, Eunice Park
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;