import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import "../style//MentalDisorder.css";


const MentalDisorder = () => {

  const [currentDisorder,setDisorder] = useState('');



  const styleColor = {color:'white'}

  const mentalDisorders = [
    {
      title: 'Anxiety',
      description: 'Feeling fear or worry in response to stress. Learn more about anxiety and coping strategies.',
      imageUrl: 'https://www.gannett-cdn.com/presto/2020/04/28/USAT/fe0903a9-e372-4f69-8931-f5507ef12121-Crystal_Run_Healthcare_article_6_in_article_image.jpg?crop=4499,2531,x0,y228&width=3200&height=1801&format=pjpg&auto=webp',
    },
    {
      title: 'Depression',
      description: 'Mood disorder affecting daily activities. Explore symptoms and seek support.',
      imageUrl: 'https://i.postimg.cc/432zL9c2/dep.jpg',
    },
    {
      title: 'Loneliness',
      description: 'Emotional state of disconnection. Discover impacts and strategies for building connections.',
      imageUrl: 'https://i.postimg.cc/wvVdY96r/lon.jpg',
    },
    {
      title: 'Stress',
      description: 'Body’s response to demands or pressures. Understand causes and develop healthy coping mechanisms.',
      imageUrl: 'https://i.postimg.cc/tJkRkhZY/stress.jpg',
    },
  ];





  // useEffect(()=>{
  // },[currentDisorder])
  

  
  
  

  

  return (
    <>
        <h1>Hello Disorder</h1>
        <div className='disorders' style={styleColor}>
          <p className="welcome">
          Welcome to {"Coll&Calm"}, a supportive space dedicated to mental health and well-being. We understand the challenges that individuals face when dealing with mental health issues, and our mission is to provide valuable resources and guidance to help you navigate your journey
          <br />
          <br />
          At {"Coll&Calm"}, we believe that mental health is of utmost importance. Just as we prioritize our physical health, it's essential to pay attention to our emotional and psychological well-being. We are here to empower you to take control of your mental health and find the support you need.
          <br />
          </p>
        </div>

        <div className="disorderCard" style={styleColor}>
          {
            mentalDisorders.map((items,index)=>{
              return (
                <Link to={`/Disorder/${items.title}`}> 
                <div className="card" key={index}>
                  <div className="img">
                    <img src={items.imageUrl} alt=""  className='cardImage'/>
                  </div>
                  <h2 className="cardTitle">{items.title}</h2>
                  <p className="cardContent">{items.description}</p>
                  <button className="readMore">Free From {items.title}</button>
                </div>
                </Link>
              )
            })
          }
        </div>

        <div className="leavingNote" style={styleColor}>
          <p>Thank you for visiting {"Coll&Calm"}. We are here to support you on your journey to better mental health. Remember, you are not alone."</p>
          <br />
        </div>
    </>
  )
}

export default MentalDisorder