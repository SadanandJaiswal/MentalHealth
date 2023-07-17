import React from 'react'
import Quotesitem from './Quotesitem'
import './quotes.css'

const Quotes = () => {
    const articles=[
        {
          "id":"1",
          "author": "Grace Kay",  
          "urlToImage": "https://i.postimg.cc/G3sZ04gs/i1.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"2",
          "author": "UNKNOWN",  
          "urlToImage": "https://i.postimg.cc/Xq1YRpYJ/q11.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"3",
          "author": "Unknown",  
          "urlToImage": "https://i.postimg.cc/tgHysh1P/i1.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"4",
          "author": "Zig Zay",  
          "urlToImage": "https://i.postimg.cc/wjj40MSP/i1.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
            "id":"5",
            "author": "Zig Zay",  
            "urlToImage": "https://i.postimg.cc/K4XFSTn0/lifee.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"6",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/j50cf4PH/i1.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"7",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/v8nWz1y2/p.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"8",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/7ZCK80bv/qw7.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"9",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/v8nWz1y2/p.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"10",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/wxmxvbP3/qw3.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"11",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/0jTqGxBr/qw1.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"12",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/WbYZvyJz/qw.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          }
        
      ];
  return (
    <>
    <div className='agko'>
      <h1 style={{color:"black"}}>Quotes!!</h1>
      <div className='quote-container'>
        {articles.map((element) => (
          <div className='quote-item' key={element.id} >
            <Quotesitem
              imageUrl={element.urlToImage}
              author={element.author}
              category={element.category}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  </>
       )
}

export default Quotes

