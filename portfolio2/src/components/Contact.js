import React from 'react'
import Button from 'react-bootstrap/Button';
import { BsPhone } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import { FaLinkedinIn, FaBehance } from 'react-icons/fa'


const Contact = () => {
  return (
    <div id="contact" className='container'>
      <div className='numbers'>
        <h4 className='title'>
          Get  <b>in touch</b>
        </h4>
        <div className='line-left'>
          <div className='contact-icons'>
            <div>
              <a href='tel:+48606354801'>
                <BsPhone size={24} className='react-icons'/>
              </a>
              (+48) 606-354-801
            </div>
            <div>
              <a href="mailto:nataliaszlag@gmail.com">
                <MdOutlineMail size={24} className='react-icons'/> 
              </a>
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
        </div>
        
      </div>
      <div className='links'>
        <Button href='https://www.behance.net/nataliaszlag' target='_blank' >
        <FaBehance size={24}/>         
        </Button>
        <Button  href='https://www.linkedin.com/in/natalia-szlag-3515891b8/?originalSubdomain=pl' target='_blank' >
        <FaLinkedinIn size={24}/>    
        </Button>
      </div>
    </div>
  )
}

export default Contact