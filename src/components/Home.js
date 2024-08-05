import React from 'react'
import { Link } from "react-router-dom";
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home-parent-container'>
        <div className='home-first-column'>
          <a className='home-media-section' href='https://www.linkedin.com/in/jorgemarcoarraez/'>Li</a>
          <a className='home-media-section' href='https://google.com'>Tw</a>
          <a className='home-media-section' href='https://www.instagram.com/dev.jmarco'>Ig</a>
          <a className='home-media-section' href='https://github.com/jmarcoz1'>Gi</a>
        </div>

        <div className='home-second-column'>
          <div className='home-name-container'>
            <h1 className='home-name'>JORGE</h1>
            <h1 className='home-name'>MARCO</h1>
            <h1 className='home-name'>ARRAEZ</h1>
          </div>
          <div className='home-location-container'>
            <p className='home-location'>Valence, Spain</p>
          </div>
          <div className='home-details-container'>
            <h2 className='home-details'>Devops / Software engineer</h2>
            <h2 className='home-details'>Bachelor - Telecommunications eng.</h2>
            <h2 className='home-details'>MsC - Cloud computing</h2>
          </div>
        </div>

      <div className='home-third-column'>
        <Link className='home-contact-section work' to='/work'>WORK</Link>
        <Link className='home-contact-section about' to='/about'>ABOUT</Link>
        <Link className='home-contact-section contact' to='/contact'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Home