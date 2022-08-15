import React from 'react'
import AboutCard from './Card.js'
import deliveryImg from '../assets/imgs/dashboard.webp'
import googleImg from '../assets/imgs/campaigns-v2.webp'
import freeImg from '../assets/imgs/pro2_1.webp'
import weddingImg from '../assets/imgs/wedding.webp'
import accountingImg from '../assets/imgs/accounting.webp'

  const cardList = [
    {   
      "id" : 1,
        "title" : "My ",
        "title2" : "Delivery",
        "imageUrl" : [deliveryImg], 
        "text" : "This web application was designed for ecommerce platform. It can be adopted and used in almost every ecommerce. It helps Sellers to manage orders and provide delivery services. ", 
        "linkText" : "VIEW CASE STUDY", 
        "linkUrl" : "/delivery"
    },
    {
      "id" : 2,
        "title" : "Google ",
        "title2" : "Ads",
        "imageUrl" : [googleImg], 
        "text" : "Complex Dashboard for campaigns in Google Ads, that has been created for popular ecommerce platform in Poland. It allows create diverse campaigns in GA and helps manage active ones. ", 
        "linkText" : "VIEW DETAILS", 
        "linkUrl" : "/ads"
    },
    {
      "id" : 3,
        "title" : "Free ",
        "title2" : "Delivery",
        "imageUrl" : [freeImg], 
        "text" : "Free delivery program for popular ecommerce platform in Poland, from B2B and B2C perspectives.", 
        "linkText" : "coming soon", 
        "linkUrl" : "#"
    },
    {
      "id" : 4,
        "title" : "Wedding ",
        "title2" : "Website",
        "imageUrl" : [weddingImg], 
        "text" : "Demo page for wedding stationery company, which creates wedding websites for customers. It shows the most important functions available for customers.", 
        "linkText" : "VIEW CASE STUDY", 
        "linkUrl" : "/wedding"
    },
    {
      "id" : 5,
        "title" : "Accounting ",
        "title2" : "Website",
        "imageUrl" : [accountingImg], 
        "text" : "Responsive web design for an accounting company. Website highlights the most important services for customers.", 
        "linkText" : "VIEW CASE STUDY", 
        "linkUrl" : "/accounting"
    }
]

const Cards = () => {

  const listedCards = cardList.map((e) => <AboutCard key={e.id} title={e.title} title2={e.title2} imageUrl={e.imageUrl} text={e.text} linkText={e.linkText} linkUrl={e.linkUrl}/>)
  return (

    <div id="cards">
     { listedCards }
    </div>
  )
}

export default Cards