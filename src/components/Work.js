import React from 'react'
import { Link } from "react-router-dom";
import '../styles/work.css'

const Work = () => {
  return (
    <div className='work-parent-container'>
      <div className='work-first-column'>
        <Link className='contact-homelink' to='/'>~/</Link>
      </div>
      <h1 className='work-under-construction'>Under construction! Come back in a few months. Workers are doing their best.</h1>
      {/* <div></div> */}
    </div>
  )
}

export default Work