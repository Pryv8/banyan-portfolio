import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
   <div className="container header_container">
    <h3>Hello I'm</h3>
    <h1>Developer Gilmore</h1>
    <h3 className="text-light">Front End Developer</h3>
    <CTA />
    <HeaderSocial />
   </div>


  
   </header>

  )
}

export default Header
