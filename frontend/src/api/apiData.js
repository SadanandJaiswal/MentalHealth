import axios from 'axios';
import {useState} from 'react'


const mentalDisorderApiData = ()=>{
    axios.get('https://mentalhealthproject-jeevenbandhu.onrender.com/mentalDisorderDetails')
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
    axios.get('https://mentalhealthproject-jeevenbandhu.onrender.com/meditationDetails')
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
    axios.get('https://mentalhealthproject-jeevenbandhu.onrender.com/sleepDetails')
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
    axios.get('https://mentalhealthproject-jeevenbandhu.onrender.com/getQuotes')
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
    axios.get('https://mentalhealthproject-jeevenbandhu.onrender.com/musicDetails')
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
