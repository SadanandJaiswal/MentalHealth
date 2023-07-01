

import React from 'react'

const Quotesitem = ({imageUrl,author,category,date}) => {
    return (
                <div className="my-3">
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>{author}
              </span>
            <img src={imageUrl} class="card-img-top" alt="..."/>
            
                <p className="card-text"><small className='text-danger'>By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <p>{category}</p>
                </div>
              </div>
        )
}

export default Quotesitem
