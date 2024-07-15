import React from 'react'
import { Link } from "react-router-dom";
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact-parent-container'>
      <div className='contact-first-column'>
        <Link className='contact-homelink' to='/'>~/</Link>
      </div>

      <div className='contact-greeting-section'>

        <div className='contact-h2-div'>
          <h2 className='contact-h1'>Got a challenge? Reach out.</h2>
        </div>

        <div className='contact-empty-horizontal'>
        </div>

        <div className='contact-info'>
          <a className='contact-mail-a' href='mailto:marcojarraez@gmail.com'>marcojarraez@gmail.com</a>
          <div className='contact-media'>
            <a className='contact-a' href='https://www.linkedin.com/in/jorgemarcoarraez/'>LinkedIn</a>
            <a className='contact-a' href='https://.com/'>Twitter</a>
            <a className='contact-a' href='https://www.instagram.com/dev.jmarco'>Instagram</a>
            <a className='contact-a' href='https://github.com/jmarcoz1'>Github</a>
          </div>
        </div>

      </div>

      <div className='contact-empty-space'>
      </div>
    </div>
  )
}

export default Contact