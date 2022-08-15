import React from 'react'
import download from '../assets/imgs/download.svg'
import cv from '../assets/pdf/NataliaSzlag_CV.pdf'

const Hero = () => {
  return (
    <div id="hero">
      <h1 id="title">Szlag <br></br>Natalia</h1>
      <a href={cv} download>
        <div id="resume">Resume 
          <img
            src={download}
            width="21"
            height="21"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          </div>
          </a>
    </div>
  )
}

export default Hero