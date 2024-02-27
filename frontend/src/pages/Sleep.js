import React from 'react'
import { useNavigate } from 'react-router-dom';
// import '../style/sleep.css';
// MAterial UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Sleep = () => {
  const navigate = useNavigate();
  const clickHandler1 = () => {
      navigate('/sleep/intro');
  }
  // const clickHandler2 = () => {
  //     navigate('/sleep/basics');
  // }
  // const clickHandler3 = () => {
  //   navigate('/sleep/disorder');
  // }
  // const clickHandler4 = () => {
  //     navigate('/sleep/tips');
  // }
  return (
    <div>
      <h1> Sleep </h1>
      <div className='sleep-div'>

        {/* Introduction */}
        <Card sx={{ width: '50%', marginRight: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '20px' }}>

          <CardMedia
            sx={{ height: 140 }}
            title="green iguana"
            image="https://i.cbc.ca/1.6534070.1658953881!/fileImage/httpImage/sleep-app-reviews.jpg"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h5>
              Introduction
            </h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>
              Sleep is a fundamental aspect of our overall well-being and plays a crucial role in maintaining good mental health. 
              Adequate and restful sleep is essential for cognitive function, emotional balance, and physical health.
            </p>
            </Typography>
          </CardContent>
          <CardActions style={{alignContent: 'center', margin: 'auto', width: 'fit-content'}}>
            <Button size="small" style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Share</Button>
            <Button size="small" onClick={clickHandler1} style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Learn More</Button>
          </CardActions>
        </Card>

        {/* Sleep Basics */}
        <Card sx={{ width: '50%', marginRight: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '20px' }}>
          <CardMedia
            sx={{ height: 140 }}
            title="green iguana"
            image="https://www.cchwyo.org/images/blog/2022/iStock-851356944.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h5>
              Sleep Basics
            </h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>
              Getting the right amount of sleep is crucial for our overall well-being. The recommended amount of sleep varies depending on age.
              Our sleep is divided into cycles consisting of different stages
            </p>
            </Typography>
          </CardContent>
          <CardActions style={{alignContent: 'center', margin: 'auto', width: 'fit-content'}}>
            <Button size="small" style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Share</Button>
            <Button size="small" onClick={clickHandler1} style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Learn More</Button>
          </CardActions>
        </Card>

        {/* Sleep Disorders */}
        <Card sx={{ width: '50%', marginRight: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '20px' }}>
          <CardMedia
            sx={{ height: 140 }}
            title="green iguana"
            image="https://www.drlalitmahajan.com/wp-content/uploads/2019/11/23668ed.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h5>
              Sleep Disorders
            </h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>
              Sleep disorders can significantly impact sleep quality and overall mental well-being.
              it is important to consult with a healthcare professional or a sleep specialist.
            </p>
            </Typography>
          </CardContent>
          <CardActions style={{alignContent: 'center', margin: 'auto', width: 'fit-content'}}>
            <Button size="small" style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Share</Button>
            <Button size="small" onClick={clickHandler1} style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Learn More</Button>
          </CardActions>
        </Card>

        {/* Better Sleep */}
        <Card sx={{ width: '50%', marginRight: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '20px' }}>
          <CardMedia
            sx={{ height: 140 }}
            title="green iguana"
            image="https://hips.hearstapps.com/hmg-prod/images/woman-falls-asleep-and-counts-sheep-insomnia-royalty-free-illustration-1675196187.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h5>
              Better Sleep
            </h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>
              Establishing healthy sleep habits and practicing good sleep hygiene can greatly improve your sleep quality and overall well-being. 
              Here are some tips to help you get better sleep:
            </p>
            </Typography>
          </CardContent>
          <CardActions style={{alignContent: 'center', margin: 'auto', width: 'fit-content'}}>
            <Button size="small" style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Share</Button>
            <Button size="small" onClick={clickHandler1} style={{backgroundColor: 'lavenderblush', fontWeight: 'bold'}}>Learn More</Button>
          </CardActions>
        </Card>
      
      </div>
    </div>
  )
}

export default Sleep