import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact(){

  const navigate = useNavigate();
  return(
    <>
     <h1>Contact</h1>
     <div className="contact-btn">
      <button onClick={()=> navigate('info')}>Contact-info</button>
      <button onClick={()=> navigate('det')}>Contact-detail</button>

     </div>
    </>
  )
}

export default Contact