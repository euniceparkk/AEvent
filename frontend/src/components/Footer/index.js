import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="copyright">©2021 AEvent</div>
        <div className="quote">"People make events into stories. Stories give events meaning." -Scarlett Thomas</div>

        <div className='connect-links__container'>

          <div className='linked-in__container'>
            <div className='linked-in__text'>Connect with Developer</div>
            <a href="https://www.linkedin.com/in/euniceparkk/" target="_blank" rel="noreferrer">
              <div className="linked-in">LinkedIn</div>
            </a>
          </div>

          <div className='git-hub__container'>
            <div className='git-hub__text'>Connect with Repo</div>
            <a href="https://github.com/euniceparkk/AEvent" target='_blank' rel='noreferrer'>
              <div className='git-hub'>Github</div>
            </a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer;