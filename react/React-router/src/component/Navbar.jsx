import React from 'react'
import img from '../assets/react.svg'
import {Link} from 'react-router-dom'

function Navbar(){


  return(
    <div className='navbar'>
      <img src={img} alt="" />
      <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/contact"><li>Contact</li></Link>
       <Link to="/about"><li>About</li></Link>
      </ul>
      <button>Get started</button>
    </div>
  )
}

export default Navbar