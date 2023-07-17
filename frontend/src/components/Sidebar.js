import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { TfiThought } from 'react-icons/tfi';
import { NavLink, useLocation } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
import { ImMusic } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { GiNightSleep } from 'react-icons/gi';
import { FaBrain } from 'react-icons/fa';
import './sidebar.css';

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <FaHome />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <FcAbout />,
  },
  {
    path: '/affirmation',
    name: 'Affirmation',
    icon: <TfiThought />,
  },
  {
    path: '/MentalDisorder',
    name: 'Disorders',
    icon: <FaBrain />,
  },
  {
    path: '/meditation',
    name: 'Meditation',
    icon: <GiMeditation />,
  },
  {
    path: '/music',
    name: 'Music',
    icon: <ImMusic />,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <CgProfile />,
  },
  {
    path: '/sleep',
    name: 'Sleep',
    icon: <GiNightSleep />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      opacity: 1,
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const activeIndex = routes.findIndex((route) => route.path === location.pathname);

  const getColor = (index) => {
    const colors = [
      { backgroundColor: '#21d190', backgroundImage: 'linear-gradient(315deg, #21d190 0%, #d65bca 74%)' },
      { backgroundColor: '#dbf26e', backgroundImage: 'linear-gradient(319deg, #dbf26e 0%, #61fa74 37%, #1cfdd6 100%)' },
      { backgroundColor: '#98ce00', backgroundImage: 'linear-gradient(319deg, #98ce00 0%, #e5f77d 37%, #dc9e82 100%)' },
      { backgroundColor: '#98ce00', backgroundImage: 'linear-gradient(319deg, #98ce00 0%, #e5f77d 37%, #dc9e82 100%)' },
      { backgroundColor: '#98ce00', backgroundImage: 'linear-gradient(319deg, #98ce00 0%, #e5f77d 37%, #dc9e82 100%)' },
    ];

    if (index === hoveredIndex || index === activeIndex) {
      return {
        backgroundColor: colors[index % colors.length].backgroundColor,
        backgroundImage: colors[index % colors.length].backgroundImage,
      };
    }

    return { backgroundColor: 'inherit', backgroundImage: 'none' };
  };

  return (
    <div className='main-container'>
      <motion.div
        animate={{
          width: isOpen ? '250px' : '80px',
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 11,
          },
        }}
        className='sidebar'
      >  <img src='jevenbandhu.png' alt='' /> 
         
        <div className='top_section'>
      
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='logo'
            >
            </motion.h1>
          )}
          <div className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className='routes'>
          {routes.map((route, index) => (
            <NavLink
              activeClassName='active'
              exact={route.path === '/'}
              to={route.path}
              key={route.name}
              className='link'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='icon' style={getColor(index)}>
                {route.icon}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='link_text'
                    style={{ fontFamily: 'Merriweather' }}
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main style={{ width: '100%' }}>{children}</main>
    </div>
  );
};

export default Sidebar;
