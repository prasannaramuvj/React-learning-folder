import React from 'react'
import img from '../assets/react.svg'
import {Link} from 'react-router-dom'
import { NavLink,useNavigate } from 'react-router-dom'

function Navbar(){

  const navigate = useNavigate();


  return(
    <div className='navbar'>
      <img src={img} alt="" />
      <ul>
       {/* <Link to="/"><li>Home</li></Link>
       <Link to="/contact"><li>Contact</li></Link>
       <Link to="/about"><li>About</li></Link> */}
       <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/contact"><li>Contact</li></NavLink>
       <NavLink to="/about"><li>About</li></NavLink>
      </ul>
      <button onClick={() => navigate('/contact',{ replace:true })}>Get started</button>
    </div>
  )
}

export default Navbar