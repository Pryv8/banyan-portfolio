import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
   <div className="container header_container">
    <h1>Princess Gilmore</h1>
    <h3>Programmer/Web Developer</h3>
    <h3 className="text-light">UI / UX Designer</h3>
    <CTA />
    <HeaderSocial />
   </div>


  
   </header>

  )
}

export default Header
