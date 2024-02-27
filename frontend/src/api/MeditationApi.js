import axios from 'axios';

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

const MeditationApi = meditationApiData();

export default MeditationApi;