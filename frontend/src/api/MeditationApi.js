// const MeditationApi = [
//     {
//         id: 'one',
//         name: "Mindfulness Meditation",
//         steps: [
//           "Find a quiet place",
//           "Sit comfortably",
//           "Focus on your breath",
//           "Observe your thoughts",
//           "Return to your breath",
//         ],
//         benefits: [
//           "Reduces stress",
//           "Increases self-awareness",
//           "Improves focus and concentration",
//         ],
//         problems: ["Restlessness", "Difficulty staying present"],
//         videoUrl: "https://youtu.be/ssss7V1_eyA",
//       },
//       {
//         id: 'two',
//         name: "Transcendental Mantra Meditation for Grounding",
//         steps: [
//           "Sit comfortably with eyes closed",
//           "Repeat a mantra silently",
//           "Allow thoughts to come and go",
//         ],
//         benefits: ["Promotes grounding", "Reduces anxiety", "Enhances clarity"],
//         problems: ["Finding a suitable mantra", "Mental distractions"],
//         videoUrl: "https://youtu.be/oxBSo9GwbtI",
//       },
//       {
//         id: 'three',
//         name: "Loving-Kindness Meditation",
//         steps: [
//           "Sit comfortably",
//           "Generate feelings of love and kindness",
//           "Direct well-wishes towards yourself",
//           "Extend well-wishes towards others",
//         ],
//         benefits: [
//           "Cultivates compassion",
//           "Increases positive emotions",
//           "Improves relationships",
//         ],
//         problems: [
//           "Difficulty generating loving feelings",
//           "Challenging emotions may arise",
//         ],
//         videoUrl: "https://youtu.be/sDi40FQcaIU",
//       }
// ]

import axios from 'axios';

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

const MeditationApi = meditationApiData();

export default MeditationApi;