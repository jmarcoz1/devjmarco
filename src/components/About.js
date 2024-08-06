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
            I began my professional career back in February 2023, when I got an internship as a Software engineer.
            After four months, I was hired as a Junior engineer, working with a team of 3 people to develop a CI test framework with its own web application.
          </h2>
          <h2 className='about-h2'>
            Working in such a small team, which you may consider a startup inside a big company, allowed me to become proficient at using tools I was not familiar with (Jenkins, Docker, PostgreSQL)
            and improve my skills in Python, Bash and Javascript. The learning curve was steep, but I was lucky to be surrounded by sublime professionals who mentored me along the way. Thanks Anna, Emanuel, Jaime.
          </h2> <br />
          <h2 className='about-h2'>
            I graduated in Telecommunications engineering in September 2023, and decided to spend the 2023-2024 academic year working.
            I am starting a Master's degree in Cloud and High Performance Computing in September 2024.
          </h2> <br />
          <h2 className='about-h2'>
            I am into all types of technology, specially open source software.
            The Linux project fascinates me, I would like to dive deeper into the firmware development realm and eventually make some contributions to one of the greatest iniciatives of the last century.
          </h2> <br />
          <h2 className='about-h2'>
            A more personal note:
            I am keen on running. I intend to run Valencia marathon on December 1st 2024. I will be busy with the preparation, so I may not populate the
            work section of the web as often as I would like.
          </h2> <br />
          <h2 className='about-h2'>
            Anyway, I put all my efforts in the task at hand, so
            any project that ends up published will be the result
            of a joyful coding journey.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About