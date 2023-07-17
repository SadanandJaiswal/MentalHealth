import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './quotes.css';

const Quotesitem = ({ imageUrl, author, category, date }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    // Add your share functionality here
    console.log('Share button clicked!');
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <img className="slider-image" src={imageUrl} alt={author} />
              <div className="quote-badge">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {author} </span>
                {/* <p className="author badge bg-danger">{author}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="quote-details">
              <div className="quote-meta">
                {/* <p className="category">{category}</p> */}
                {/* <p className="date"><></>{date}</p> */}
              </div>
              <div className="quote-actions">
                <div className="like-section">
                  <button className="like-button btn btn-primary" onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <span className="like-count">{likes}</span>
                </div>
                <button className="share-button btn btn-secondary" onClick={handleShare}>
                  <FontAwesomeIcon icon={faShareAlt} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotesitem;
