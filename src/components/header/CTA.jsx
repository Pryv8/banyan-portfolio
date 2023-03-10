import React from 'react'
import CV from '../../assets/Princess Gilmore Resume.pdf'
import ME from '../../assets/madison-lavern-4gcqRf3-f2I-unsplash.jpg'
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} className='btn' download>Download CV</a>
    <a href='#contact' className='btn btn-primary' >Let's Talk</a>
     


<div className='me'>
    <img src={ME} alt="" />
</div>
<a href='#contact' className='scroll_down'> Scroll Down</a>
</div>
  )
}

export default CTA

