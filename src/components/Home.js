import React from 'react'
import '../styles/style.css'

const Home = () => {
  return (
    <div className='parent-container'>
      <div className='first-column'>
        <a className='media-section' href='https://google.com'>Li</a>
        <a className='media-section' href='https://google.com'>Tw</a>
        <a className='media-section' href='https://google.com'>Ig</a>
        <a className='media-section' href='https://google.com'>Gi</a>
      </div>
      <div className='second-column'>
          <div className='second-column'>
            <p className='name'>JORGE</p>
            <p className='name'>MARCO</p>
            <p className='name'>ARRAEZ</p>
          </div>
          <div className='location'>Valence, Spain</div>
        <div className='second-column'>
          <p className='details'>Devops / Software engineer</p>
          <p className='details'>Bachelor - Telecommunications eng.</p>
          <p className='details'>MsC - Cloud computing</p>
        </div>
      </div>
      <div className='third-column'>
        <a className='contact-section' href='https://google.com'>WORK</a>
        <a className='contact-section' href='https://google.com'>ABOUT</a>
        <a className='contact-section' href='https://google.com'>CONTACT</a>
      </div>
    </div>
  )
}

export default Home