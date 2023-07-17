import axios from 'axios';


const MentalDisorders = 
[
  {
      name:"Loneliness",
      image: 'https://i.postimg.cc/wvVdY96r/lon.jpg',
      title:"Breaking the Cycle of Loneliness: Strategies for Connection",
      description:"Loneliness is an emotional state that can have a significant impact on mental health. It is characterized by feelings of isolation, disconnection, and a lack of companionship. Addressing loneliness requires proactive steps to build connections and seek support.",
      what_is:"Loneliness is a subjective feeling of social isolation or a perceived lack of meaningful connections. It can occur regardless of the number of social interactions one has and can affect individuals of all ages and backgrounds. Loneliness is not solely determined by the physical presence of others but rather the quality and depth of relationships.",
      Symptoms:[
      "Feeling isolated or socially disconnected",
      "Lack of close relationships or companionship",
      "Persistent feelings of emptiness",
      "Difficulty connecting with others",
      "Low self-esteem",
      "Increased self-criticism",
      "Depression or sadness",
      "Difficulty sleeping or changes in sleep patterns",
      "Lack of motivation or interest in activities",
      "Physical symptoms like headaches or body aches"
      ],
      strategies:[ 
      "Reach out to friends or family members for social support",
      "Join clubs or community groups to meet new people",
      "Engage in activities you enjoy and that involve social interaction",
      "Volunteer or participate in community service",
      "Practice self-care and prioritize your well-being",
      "Seek professional help or therapy if needed",
      "Use technology to connect with others through social media or online communities",
      "Consider getting a pet for companionship",
      "Attend social events or gatherings",
      "Practice mindfulness and self-compassion"
      ]
  },
  {
      name: "Anxiety",
       image: "https://i.postimg.cc/NfFQYwq9/dep.jpg",
      title: "Managing Anxiety: Coping Strategies for Inner Peace",
      description: "Anxiety is a common mental health condition characterized by excessive worry, fear, and uneasiness. It can manifest in various forms, such as generalized anxiety disorder, panic disorder, or social anxiety disorder. Managing anxiety involves adopting coping strategies to reduce symptoms and promote a sense of calm.",
      what_is: "Anxiety is a natural response to stress or perceived threats. It becomes a disorder when it persists over time and interferes with daily life. Common symptoms of anxiety include excessive worrying, restlessness, difficulty concentrating, irritability, muscle tension, and sleep disturbances.",
      Symptoms: [
        "Excessive worrying or feeling on edge",
        "Restlessness or irritability",
        "Difficulty concentrating or racing thoughts",
        "Muscle tension or physical discomfort",
        "Sleep disturbances, such as insomnia or nightmares",
        "Feeling overwhelmed or having a sense of impending doom",
        "Panic attacks, including rapid heartbeat and shortness of breath",
        "Avoidance of situations that trigger anxiety",
        "Digestive issues or gastrointestinal problems",
        "Feeling easily fatigued or lacking energy"
      ],
      strategies: [
        "Practice deep breathing exercises and relaxation techniques",
        "Challenge negative thoughts and replace them with positive ones",
        "Engage in regular physical exercise to reduce anxiety symptoms",
        "Use grounding techniques to stay present in the moment",
        "Establish a consistent sleep routine and prioritize restful sleep",
        "Limit caffeine and alcohol consumption",
        "Seek support from a therapist or counselor",
        "Learn and practice stress management techniques",
        "Engage in activities that promote relaxation, such as yoga or meditation",
        "Create a structured schedule to reduce uncertainty and anxiety"
      ]
    },
    {
      name: "Depression",
       image: 'https://i.postimg.cc/432zL9c2/dep.jpg',
      title: "Overcoming Depression: Strategies for Emotional Well-being",
      description: "Depression is a mood disorder characterized by persistent feelings of sadness, loss of interest, and a lack of motivation. It can affect daily functioning and overall quality of life. Overcoming depression involves a combination of professional help, self-care practices, and social support.",
      what_is: "Depression is more than feeling sad or experiencing temporary mood swings. It is a medical condition that affects how one thinks, feels, and acts. Common symptoms of depression include persistent sadness, loss of interest in activities, changes in appetite and sleep patterns, fatigue, feelings of guilt or worthlessness, difficulty concentrating, and thoughts of self-harm or suicide.",
      Symptoms: [
        "Persistent feelings of sadness or emptiness",
        "Loss of interest or pleasure in activities once enjoyed",
        "Changes in appetite and weight (increase or decrease)",
        "Sleep disturbances, such as insomnia or excessive sleeping",
        "Fatigue or loss of energy",
        "Feelings of worthlessness or excessive guilt",
        "Difficulty concentrating or making decisions",
        "Restlessness or slowed movements",
        "Recurrent thoughts of death or suicide",
        "Physical symptoms like headaches or digestive issues"
      ],
      strategies: [
        "Reach out to trusted friends or family members for support",
        "Engage in regular exercise and physical activity",
        "Set realistic goals and break tasks into smaller, manageable steps",
        "Practice self-care activities that bring you joy or relaxation",
        "Seek professional help or therapy to address underlying issues",
        "Challenge negative thoughts and practice positive self-talk",
        "Establish a routine and prioritize activities that give you a sense of purpose",
        "Engage in hobbies or activities that bring you pleasure",
        "Avoid isolation and maintain social connections",
        "Use relaxation techniques such as deep breathing or meditation"
      ]
    },
    {
      name: "Stress",
       image: 'https://i.postimg.cc/tJkRkhZY/stress.jpg',
      title: "Managing Stress: Strategies for a Balanced Life",
      description: "Stress is a natural response to challenges or demands, but excessive or chronic stress can have a negative impact on mental and physical well-being. Managing stress involves adopting strategies to reduce its effects and promote a more balanced and resilient life.",
      what_is: "Stress is the body's response to any demand or pressure. It can be triggered by various factors, including work, relationships, or major life changes. Common symptoms of stress include irritability, anxiety, difficulty concentrating, sleep disturbances, muscle tension, and changes in appetite or weight.",
      Symptoms: [
        "Feeling overwhelmed or constantly under pressure",
        "Excessive worry or anxiety",
        "Difficulty relaxing or constant restlessness",
        "Changes in appetite or weight",
        "Insomnia or disrupted sleep patterns",
        "Irritability or mood swings",
        "Difficulty concentrating or making decisions",
        "Physical symptoms like headaches, muscle tension, or stomach issues",
        "Avoidance of certain situations or activities",
        "Increased reliance on unhealthy coping mechanisms (e.g., substance abuse)"
      ],
      strategies: [
        "Identify and prioritize tasks to manage time effectively",
        "Practice relaxation techniques such as deep breathing or meditation",
        "Engage in regular physical exercise to reduce stress levels",
        "Establish healthy boundaries and learn to say no when necessary",
        "Seek social support from friends, family, or support groups",
        "Delegate tasks and ask for help when needed",
        "Take breaks and incorporate self-care activities into your routine",
        "Manage your workload by breaking it down into smaller, manageable tasks",
        "Practice effective communication and assertiveness skills",
        "Limit exposure to stressors and establish a healthy work-life balance"
      ]
    }
]


// const mentalDisorderApiData = ()=>{
//   axios.get('/mentalDisorderDetails')
//   .then((response)=>{
//     const data = response.data.data;
//     console.log('disorderr data')
//     console.log(data);
//     return data;
//   })
//   .catch((e)=>{
//       console.log('there is error in fetchin data')
//       console.log('error is ',e);
//   })
// }

// const MentalDisorders = mentalDisorderApiData();




export default MentalDisorders;