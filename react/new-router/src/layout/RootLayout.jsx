import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'


function RootLayout(){


  return(
    <div>
      <Navbar/>
      <div className="container">
      <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout