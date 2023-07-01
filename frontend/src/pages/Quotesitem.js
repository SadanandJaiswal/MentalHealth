import React from 'react';


// import './quotes.css';

const Quotesitem = ({ imageUrl, author, category, date }) => {
  return (
    <div className="my-card"style={{ padding: '8px' }}>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
          {author}
        </span>
        <img src={imageUrl} id="thumbnail" className="card-img-top" alt=".." style={{ width: '100%',height: '150px', padding: '8px' }} />
        {/* Add spacing below the image */}
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default Quotesitem;
