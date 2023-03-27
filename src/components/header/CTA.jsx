import React from 'react'
import CV from '../../assets/Final P.Gilmore Resume.docx'
import ME from '../../assets/me.jpg'
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} className='btn' download>Download CV</a>
    <a href='#contact' className='btn btn-primary' >Let's Talk</a>
     


<div className='me'>
    <img className='me2'
    src={ME} alt="" />
</div>
<a href='#contact' className='scroll_down'> Scroll Down</a>
</div>
  )
}

export default CTA

