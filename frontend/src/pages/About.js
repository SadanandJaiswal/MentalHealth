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
    <motion.div
      className="about-us-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h2 className="about-us-heading">About Us</h2>

      <motion.img
        src="https://www.kokilabenhospital.com/blog/wp-content/uploads/2022/10/65453981-EE27-4033-AB33-E77DFF6663A9.jpeg"
        alt="about-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="about-img"
      />
      
      <motion.p
        className="about-us-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to our Mental Health website! We are dedicated to promoting mental well-being and providing resources to support 
        individuals on their mental health journeys.
      </motion.p>

      <motion.p
        className="about-us-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Our mission is to break the stigma surrounding mental health and create a safe and inclusive space where people can access 
        information, find support, and discover strategies for improving their mental well-being.
      </motion.p>

      <Accordion style={{backgroundColor: 'lightpink'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Our Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We envision a world where mental health is prioritized, understood, and embraced by society. We strive to empower individuals 
          to take charge of their mental well-being and seek help when needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor: 'lavenderblush'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What We Offer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On our website, you will find a wide range of resources, articles, and tools related to mental health. We cover topics such 
            as stress management, self-care, mindfulness, coping strategies, and more.
          </Typography>
          <br></br>
          <Typography>
            We aim to provide reliable and evidence-based information to educate and guide individuals in their mental health journeys. 
            However, please note that our website does not substitute professional medical advice. If you require immediate assistance 
            or have serious concerns about your mental health, please consult with a qualified healthcare professional.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <motion.h3
        className="about-us-subheading"
        whileHover={{ color: '#ff6b6b' }}
      >
        Get Involved
      </motion.h3>

      <motion.p
        className="about-us-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        We believe that mental health is a collective effort. If you share our passion for mental well-being and would like to contribute, please reach out to us. We welcome collaborations, guest articles, and suggestions for improving our website.
      </motion.p>

      <motion.p
        className="about-us-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Thank you for visiting our Mental Health website. We hope you find the information and support you need to prioritize and nurture your mental well-being.
      </motion.p>
    </motion.div>
  )
}

export default About;