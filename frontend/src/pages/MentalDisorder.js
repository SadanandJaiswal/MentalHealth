import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../style/MentalDisorder.css";

const MentalDisorder = () => {
  const [mentalDisorders, setMentalDisorders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/mentalDisorderDetails');
          const data = response.data.data;
          console.log('disorder data')
          console.log(data);
          setMentalDisorders(data);
        } catch (error) {
          setError('Error fetching data');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
  }, []);

  const styleColor = { color: 'white' };

  return (
    <>
      <h1>Hello Disorder</h1>
      <div className='disorders' style={styleColor}>
        <p className="welcome">
          Welcome to {"Coll&Calm"}, a supportive space dedicated to mental health and well-being. We understand the challenges that individuals face when dealing with mental health issues, and our mission is to provide valuable resources and guidance to help you navigate your journey
          <br />
          <br />
          At {"Cool&Calm"}, we believe that mental health is of utmost importance. Just as we prioritize our physical health, it's essential to pay attention to our emotional and psychological well-being. We are here to empower you to take control of your mental health and find the support you need.
          <br />
        </p>
      </div>

      {loading ? (
        <div className="disorderCard" style={styleColor}>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="disorderCard" style={styleColor}>
          {mentalDisorders.map((items, index) => (
            <Link to={`/Disorder/${items.name}`} key={index}>
              <div className="card">
                <div className="img">
                  <img src={items.imageUrl} alt="" className='cardImage' />
                </div>
                <h2 className="cardTitle">{items.name}</h2>
                <p className="cardContent">{items.title}</p>
                <button className="readMore">Free From {items.name}</button>
              </div>
            </Link>
          ))}
        </div>
      )}

    </>
  )
}

export default MentalDisorder;
