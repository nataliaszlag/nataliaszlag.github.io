import React from 'react'
import Card from 'react-bootstrap/Card';
import arrowRight from '../assets/imgs/arrow-right.svg'
import freeImg from '../assets/imgs/freeAcc.png'
import { Link } from "react-router-dom";

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
            <Link className="card-button" to={linkUrl}>{props.linkText} <img src={arrowRight}/></Link>
          </div>
          <div className='hidden-img'>
            <img src={freeImg}/>
          </div>
      </Card>
    
  )
}

export default AboutCard