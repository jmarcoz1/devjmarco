import React from 'react'
import { Link } from "react-router-dom";
import '../styles/about.css'

const About = () => {
  return (
    <div className='about-parent-container'>
      <div className='about-first-column'>
        <Link className='about-homelink' to='/'>~/</Link>
      </div>

      <div className='about-greeting-section'>
        <div className='about-hi-div'>
          <h1 className='about-h1'>Hi! I'm Jorge</h1>
        </div>

        <div className='about-h2-div'>
          <h2 className='about-h2'>
            Mathematics, Physics and computers have always been
            my thing. I am starting my MsC in Cloud Computing 
            September 2024.
          </h2> <br />
          <h2 className='about-h2'>
            In 2024 I wanted to dive into the artistic part of
            life, since I wanted to expand my taste for
            art/fashion/design/photography. That is where the
            idea of coming up with a website came from.
            I had the coding skills. However, designing the layout,
            creating a colour palette and making an overall
            coherent design seemed a world to me.
            I might have succeeded or not, so send me
            any suggestions you may have ;).
          </h2> <br />
          <h2 className='about-h2'>
            I am keen on running. I have ran
            3 half marathons and I plan on running Valencia
            marathon on December 1st 2024. I will be busy with the preparatoin, so I may not populate the
            work section of the web as often as I would like.
          </h2> <br />
          <h2 className='about-h2'>
            Anyway, I put all my efforts in the task at hand, so
            any project that ends up published will be the result
            of a joyful coding journey.
          </h2>
        </div>
      </div>

      {/* <div className='contact-empty-space'>
      </div> */}
    </div>
  )
}

export default About