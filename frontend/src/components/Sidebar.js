import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaHome,  } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { TfiThought } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';
import { GiMeditation } from "react-icons/gi";
import { ImMusic } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { GiNightSleep } from "react-icons/gi";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { FaBrain } from 'react-icons/fa';

const routes = [
    {
        path: '/',
        name: 'Home',
        icon: <FaHome />
    },
    {
        path: '/about',
        name: 'About',
        icon: <FcAbout />
    },
    {
        path: '/affirmation',
        name: 'Affirmation',
        icon: <TfiThought />
    },
    {
        path: '/MentalDisorder',
        name: 'MentalDisorder',
        icon: <FaBrain />
    },
    {
        path: '/meditation',
        name: 'Mediation',
        icon: <GiMeditation />
    },
    {
        path: '/music',
        name: 'Music',
        icon: <ImMusic />
    },
    {
        path: '/profile',
        name: 'Profile',
        icon: <CgProfile />
    },
    {
        path: '/sleep',
        name: 'Sleep',
        icon: <GiNightSleep />
    }
]


const Sidebar = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            }
        }, 
        show: {
            width: '140px',
            opacity: 1,
            padding: '5px 15px',
            transition: {
                duration: 0.2,
            }
        }
    }

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        }, 
        show: {
            width: 'auto',
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }
    }

  return (
    <div className='main-container'>
        <motion.div animate={{ width: isOpen ? '200px' : '36px', transition: {
            duration: 0.5,
            type: 'spring',
            damping: 11,
        } }} className='sidebar'>
            <div className='top_section'>
                {isOpen && 
                    <motion.h1 
                        variants={showAnimation} 
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className='logo'
                    > 
                        KKG Chill 
                    </motion.h1>}
                <div className='bars'>
                    <FaBars onClick={toggle} />
                </div>
            </div>
            <div className='search'>
                <div className='search-icon'>
                    <BiSearch />
                </div>
                <AnimatePresence>
                    { isOpen && (
                        <motion.input 
                            initial="hidden" 
                            animate="show" 
                            exit="hidden" 
                            variants={inputAnimation} 
                            placeholder='Search...' 
                        />) }
                </AnimatePresence>
            </div>
            <section className='routes'>
                {routes.map((route) => (
                    <NavLink activeClassName="active" to={route.path} key={route.name} className='link'>
                        <div className='icon'>
                            {route.icon}
                        </div>
                        <AnimatePresence>
                            { isOpen &&
                                <motion.div 
                                    variants={showAnimation} 
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className='link_text'
                                >
                                    {route.name}
                                </motion.div>
                            }
                        </AnimatePresence>
                    </NavLink>
                ))}
            </section>
        </motion.div>
        <main style={{width:"100%"}}>
            { children }
        </main>
    </div>
  )
};

export default Sidebar;