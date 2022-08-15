import React from 'react'
import phoneIcon from '../assets/imgs/phoneIcon.svg'
import mailIcon from '../assets/imgs/mailIcon.svg'
import linkedinIcon from '../assets/imgs/icon-linkedin.svg'
import behanceIcon from '../assets/imgs/icon-behance.svg'
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <div id="contact" className='container'>
      <h4 className='title'>
        Get  <b>in touch</b>
      </h4>
      <div className='contact-icons'>
        <div>
        <img src={phoneIcon} /> 
          (+48) 606-354-801
        </div>
        <div>
        <img src={mailIcon} /> 
          nataliaszlag@gmail.com
        </div>
      </div>
        <div className="natalia">
          <svg viewBox="0 0 500 100">
              <text x="0%" y="50%" fill="transparent" text-anchore="middle">
                  Natalia Szlag
              </text>
              </svg>
        </div>
      <div className='links'>
        <Button href='https://www.behance.net/nataliaszlag' target='_blank' >
        <img src={behanceIcon} />          
        </Button>
        <Button href='https://www.linkedin.com/in/natalia-szlag-3515891b8/?originalSubdomain=pl' target='_blank' >
        <img src={linkedinIcon} />      
        </Button>
      </div>
    </div>
  )
}

export default Contact