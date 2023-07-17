import React, { useEffect, useState } from 'react';
import Quotesitem from "./Quotesitem";
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/getQuotes');
        const data = response.data.data;
        setQuotes(data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='agko'>
        <h1 style={{color:"black"}}>Quotes!!</h1>
        <div className="quote-container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            quotes.map((element) => (
              <div className="quote-item" key={element.id}>
                <Quotesitem
                  imageUrl={element.urlToImage}
                  author={element.author}
                  category={element.category}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Quotes;