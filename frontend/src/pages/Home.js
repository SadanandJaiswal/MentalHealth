import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';



const Home = () => {

  // const [tiralData,setData] = useState(0);

  // axios.get('/trialData')
  //   .then(response => {
  //     const data = response.data;
  //     setData(response.data);
  //     // Process the data received from the backend
  //     console.log(data);
  //     // window.confirm(data);
  //     console.log(tiralData)
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error(error);
  //   });

  return (
    <div>
      <h1> Home </h1>
      {/* {
        tiralData[0].map((item)=>{
          return(
            <ul>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.password}</li>
            </ul>
          )
        })
      } */}
    </div>
  )
}

export default Home