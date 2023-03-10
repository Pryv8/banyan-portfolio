import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {FcAbout} from 'react-icons/fc'
import {SiBookmeter} from  'react-icons/si'
import {MdOutlineDesignServices} from 'react-icons/md'
import {GrContact} from 'react-icons/gr'
import {useState} from 'react'
const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoIosHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout/></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><SiBookmeter/></a>
     <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineDesignServices/></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact/></a>
     
    
      
    
    </nav>
  )
}

export default NavBar
