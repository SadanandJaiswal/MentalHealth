import React from 'react'
import Quotesitem from './Quotesitem'

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
          "author": "UNKNOWN",  
          "urlToImage": "https://i.postimg.cc/DyTmBrbY/u.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"3",
          "author": "Unknown",  
          "urlToImage": "https://i.postimg.cc/90s96L8s/iop.jpg",
          "publishedAt": "2023-02-22T15:05:33Z",
          "content": null,
          "category":"stress"
        },
        {
          "id":"4",
          "author": "Zig Zay",  
          "urlToImage": "https://i.postimg.cc/cJx8LQcb/lu4.jpg",
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
            "urlToImage": "https://i.postimg.cc/v8nWz1y2/p.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"7",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/brBDQZH8/io.png",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"8",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/kML7t0kW/think.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          },
          {
            "id":"9",
            "author": "Anonyms",  
            "urlToImage": "https://i.postimg.cc/kML7t0kW/think.jpg",
            "publishedAt": "2023-02-22T15:05:33Z",
            "content": null,
            "category":"stress"
          }
        
      ];
  return (
        <>
        <div className='my-3'>
         <h1>Quotes!!</h1>
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
