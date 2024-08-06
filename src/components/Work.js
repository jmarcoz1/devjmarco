import React from 'react'
import { Link } from "react-router-dom";
import '../styles/work.css'

const Work = () => {
  return (
    <div className='work-parent-container'>
      <div className='work-first-column'>
        <Link className='work-homelink' to='/'>~/</Link>
      </div>
      <div className='work-second-column'>
        <h1 className='work-under-construction'>Under construction!</h1>
        <h1 className='work-under-construction'>Come back in a few months. Workers are doing their best.</h1>
      </div>
    </div>
  )
}

export default Work