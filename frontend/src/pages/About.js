import React from 'react'
import './About.css';
import { motion } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  // Tried
  return (
    <div
      className="about-us-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h2 className="about-us-heading">ABOUT US</h2>

    <div className='img-div'>
      <img
        src="https://www.kokilabenhospital.com/blog/wp-content/uploads/2022/10/65453981-EE27-4033-AB33-E77DFF6663A9.jpeg"
        alt="about-img"
        className="about-img"
        />
    </div>
      
      <p
        className="about-us-description"
      >
        Welcome to our Mental Health website! We are dedicated to promoting mental well-being and providing resources to support 
        individuals on their mental health journeys.
      </p>

      <p
        className="about-us-description"
      >
        Our mission is to break the stigma surrounding mental health and create a safe and inclusive space where people can access 
        information, find support, and discover strategies for improving their mental well-being.
      </p>

      <Accordion style={{backgroundColor: 'lightpink'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2
            className="accord-heading1"
          > Our Vision
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='acco-p1'>
          We envision a world where mental health is prioritized, understood, and embraced by society. We strive to empower individuals 
          to take charge of their mental well-being and seek help when needed.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor: 'lavenderblush'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2 className="accord-heading2">What We Offer</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='acco-p'>
            On our website, you will find a wide range of resources, articles, and tools related to mental health. We cover topics such 
            as stress management, self-care, mindfulness, coping strategies, and more.
          </p>
          <br></br>
          <p className='acco-p'>
            We aim to provide reliable and evidence-based information to educate and guide individuals in their mental health journeys. 
            However, please note that our website does not substitute professional medical advice. If you require immediate assistance 
            or have serious concerns about your mental health, please consult with a qualified healthcare professional.
          </p>
        </AccordionDetails>
      </Accordion>

      <h3
        className="about-us-subheading"
        whileHover={{ color: '#ff6b6b' }}
      >
        Get Involved
      </h3>

      <p
        className="about-us-description"
      >
        We believe that mental health is a collective effort. If you share our passion for mental well-being and would like to contribute, please reach out to us. We welcome collaborations, guest articles, and suggestions for improving our website.
      </p>

      <p
        className="about-us-description"
      >
        Thank you for visiting our Mental Health website. We hope you find the information and support you need to prioritize and nurture your mental well-being.
      </p>
    </div>
  )
}

export default About;