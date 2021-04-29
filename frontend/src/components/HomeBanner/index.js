import React from 'react';
import { NavLink } from 'react-router-dom'
import './HomeBanner.css';

function HomeBanner() {
  return (
    <div className='home-banner__container-big'>

      <div className='home-banner__image-div'>
        <img alt='home-banner' className='home-banner__image' src='https://aevent-project.s3.amazonaws.com/0-home.jpg' />
      </div>

      <div className='home-banner__container-small'>
        <div className='container-small__fill'></div>
        <div className='container-small__div'>

          <div className='banner-h1__div'>
            {/* <h1 className='banner-h1'>Discover the best</h1> */}
            Discover the best
          </div>

          <div className='banner-h2__div'>
            {/* <h2 className='banner-h2'>events nationwide</h2> */}
            events nationwide
          </div>

          <div className='banner-button__div'>
            <NavLink to='/'>
              <button className='banner-button'>Get Tickets ➤</button>
            </NavLink>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HomeBanner;