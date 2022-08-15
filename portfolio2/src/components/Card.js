import React from 'react'
import Card from 'react-bootstrap/Card';
import background from '../assets/imgs/dashboard.webp'
import arrowRight from '../assets/imgs/arrow-right.svg'
import Button from 'react-bootstrap/Button';
import freeImg from '../assets/imgs/freeAcc.png'

const AboutCard = (props) => {
const {title, title2, imageUrl, text, linkText, linkUrl} = props;

  return (
   
        <Card>
          <div className='card-img-container'>
            <Card.Img variant="top" src={props.imageUrl} />
          </div>
          <div className='card-content'>
            <Card.Title>
              <div className='card-headline'>{props.title} <b>{props.title2}</b></div>
            </Card.Title>
            <Card.Text>
            {props.text}
            </Card.Text>
            <a className="card-button" href={linkUrl}>{props.linkText} <img src={arrowRight}/></a>
          </div>
          <div className='hidden-img'>
            <img src={freeImg}/>
          </div>
      </Card>
    
  )
}

export default AboutCard