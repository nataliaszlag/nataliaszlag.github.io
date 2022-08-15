import React from 'react'
import cv from '../assets/pdf/NataliaSzlag_CV.pdf'
import { BsDownload } from 'react-icons/bs'

const Hero = () => {
  return (
    <div id="hero" className='container'>
      <div className='hero-flex'>
        <div className='hero-flex-item flex-left'>
          <h1 className="hero-title title-left">Szl<br></br>Na</h1>
        </div>
        <div className='hero-flex-item flex-right'>
        <h1 className="hero-title title-right">ag <br></br>talia</h1>
        </div>
      </div>
      <a href={cv} download>
        <div id="resume">Resume 
            <BsDownload className='resume-icon'/>
          </div>
          </a>
    </div>
  )
}

export default Hero