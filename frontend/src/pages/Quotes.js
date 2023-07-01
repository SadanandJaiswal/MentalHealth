


import React from 'react'
import Quotesitem from './Quotesitem'
// import './quotes.css';

const Quotes = () => {
    const articles=[
        {
          "id":"1",
          "author": "Grace Kay",  
          "urlToImage": "https://i.postimg.cc/vBSWHpxw/s2.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"2",
          "author": "Grace Kay",  
          "urlToImage": "https://i.postimg.cc/vBSWHpxw/s2.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"3",
          "author": "Grace Kay",  
          "urlToImage": "https://i.postimg.cc/vBSWHpxw/s2.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"4",
          "author": "Grace Kay",  
          "urlToImage": "https://i.postimg.cc/vBSWHpxw/s2.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        }
        
      ];
  return (
        <>
        <div className='container my-3'>
         <h1>Quotes ji</h1>
         <div className="row">
         {articles.map((element) => {
            return (
                <div className='col-md-4' quoteid={element.id}>
                    {/* {window.confirm(element.)} */}
                <Quotesitem
                    imageUrl={element.urlToImage}
                    author={element.author}
                    category={element.category}
                    date={element.publishedAt}
                />
                </div>
            );
            })}
         </div>
        </div>
        </>
       )
}

export default Quotes
