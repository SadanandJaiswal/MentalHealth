import axios from 'axios';
import {useState} from 'react'


const mentalDisorderApiData = ()=>{
    axios.get('/mentalDisorderDetails')
    .then((response)=>{
      const data = response.data.data;
      console.log('disorderr data')
      console.log(data);
      return data;
    })
    .catch((e)=>{
        console.log('there is error in fetchin data')
        console.log('error is ',e);
    })
}


const meditationApiData = ()=>{
    axios.get('/meditationDetails')
    .then((response)=>{
      const data = response.data.data;
      console.log('meditation data')
      console.log(data);
      return data;
    })
    .catch((e)=>{
        console.log('there is error in fetchin data')
        console.log('error is ',e);
    })
}


const sleepApiData = ()=>{
    axios.get('/sleepDetails')
    .then((response)=>{
      const data = response.data.data;
      console.log('sleep data')
      console.log(data);
      return data;
    })
    .catch((e)=>{
        console.log('there is error in fetchin data')
        console.log('error is ',e);
    })
}


const quoteApiData = ()=>{
    axios.get('/getQuotes')
    .then((response)=>{
      const data = response.data.data;
      console.log('quotes data')
      console.log(data);
      return data;
    })
    .catch((e)=>{
        console.log('there is error in fetchin data')
        console.log('error is ',e);
    })
}

const musicApiData = ()=>{
    axios.get('/musicDetails')
    .then((response)=>{
      const data = response.data.data;
      console.log('music data')
      console.log(data);
      return data;
    })
    .catch((e)=>{
        console.log('there is error in fetchin data')
        console.log('error is ',e);
    })
}

const apis = {
    musicApiData:musicApiData(), quoteApiData:quoteApiData(), sleepApiData, meditationApiData, mentalDisorderApiData
}

export default apis;
