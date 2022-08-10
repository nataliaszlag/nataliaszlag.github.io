import React from 'react'
import download from '../assets/imgs/download.svg'

const Hero = () => {
  return (
    <div id="hero">
      <h1 id="title">Szlag <br></br>Natalia</h1>
      <div id="Resume">Resume 
        <img
          src={download}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </div>
    </div>
  )
}

export default Hero