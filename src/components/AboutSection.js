import React, {useState, useEffect, useRef, useMemo} from 'react';
import classes from '../css/AboutSection.module.css'
import { motion } from "framer-motion";
import photo from '../imgs/idimg.jpg'
import { GiLightningHelix } from 'react-icons/gi'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { BiLogoGithub } from 'react-icons/bi';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import Skill from "./Skill";

const AboutSection = () => {
    const scrollRef = useRef(null);
    let segmentRef = useRef(null);
    const skills = [
        {
            name: 'HTML',
            progress: 100,
            url: 'html_logo.png',

        },
        {
            name: 'CSS',
            progress: 100,
            url: 'css_logo.png',

        },
        {
            name: 'JavaScript',
            progress: 80,
            url: 'js_logo.png'
        },
        {
            name: 'React',
            progress: 80,
            url: 'react_logo.png',

        },
        {
            name: 'Redux',
            progress: 70,
            url: 'redux_logo.png'
        },
        {
            name: 'TypeScript',
            progress: 50,
            url: 'ts_logo.png'
        },

    ]
    const universe = require('../imgs/universe.jpg');
    const games = require('../imgs/games.jpg');
    const rpg = require('../imgs/rpg.jpg');

    return (
        <div className={classes.aboutsection}>
            <div className={classes.abouttile}>
                <div className={classes.segment}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{duration: 1.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.imagebox}>
                        <img src={photo}/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{duration: 1.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.details}>
                        <h1 className={classes.detailsheader}>
                            <GiLightningHelix style={{marginRight: '20px',}}/> SELF-SUMMARY <GiLightningHelix style={{transform: 'rotateY(180deg)', marginLeft: '20px'}}/>
                        </h1>
                        <div className={classes.detailsinner}>
                            <h2>Jan Kosieradzki</h2>
                            <p>
                                I am an ambitious and creative web programmer that likes to set the bar high.
                                After graduating my college I put my interest in web programming, Frontend
                                especially, and I started to create websites.
                                I am a self-taught man and web development is the passion of my life.
                                In the nearest future, I would like to work as a Front End developer.
                                I will be happy to work for a company that will help me with developing my programming skills.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className={classes.segment}>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1,  x: 0}}
                        transition={{delay: 0.5, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.experience}>
                        <h3>EXPERIENCE</h3>
                        <ul className={classes.list}>
                            <li>
                                <p>2021 - 2023</p>
                                <h4>Front-End Developer</h4>
                                <p></p>
                            </li>
                            <li>
                                <p>2019 - 2021</p>
                                <h4>E-commerce Shop Manager</h4>
                                <p></p>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1,  x: 0}}
                        transition={{delay: 0.75, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.education}
                    >
                        <h3>EDUCATION</h3>
                        <ul className={classes.list}>
                            <li>
                                <p>2012 – 2016</p>
                                <h4>Military University of Technology - Electronics and
                                    Telecommunications</h4>
                                <p></p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div className={classes.segment}>
                    <motion.div
                        ref={segmentRef}
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{delay: 0.75, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.experience}>
                        <h3>SKILLS</h3>
                        <div className={`${classes.list} ${classes.skills}`}>
                            {
                                skills.map((skill)=>
                                    <Skill
                                        key={skill.name}
                                        name={skill.name}
                                        progress={skill.progress}
                                        url={skill.url}
                                    />
                                )
                            }

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{delay: 0.5, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.education}>
                        <h3>HOBBIES</h3>
                        <div className={`${classes.list} ${classes.skills}`}>
                            <div className={classes.hobby}>
                                <img src={universe}></img>
                                <h4>Universe & Astrology</h4>
                            </div>
                            <div className={classes.hobby}>
                                <img src={games}></img>
                                <h4>Computer Games</h4>
                            </div>
                            <div className={classes.hobby}>
                                <img src={rpg}></img>
                                <h4>RPG</h4>
                            </div>



                        </div>
                    </motion.div>
                </div>
                <div className={`${classes.segment} ${classes.segment3el}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 200, rotateX: '180deg', }}
                        whileInView={{ opacity: 1, y: 0, rotateX: '0deg'}}
                        transition={{delay: 0.5, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={`${classes.experience} ${classes.profiles}`}
                    >
                        <h3>PROFILES</h3>
                        <div className={classes.profileswrap}>
                            <a href={'https://www.linkedin.com/in/jan-kosieradzki-701914259/'} target={"_blank"} className={classes.profiletile}>
                                <TiSocialLinkedinCircular />
                            </a>
                            <a href={'https://github.com/Kafarius'} target={"_blank"} className={classes.profiletile}>
                                <BiLogoGithub />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200, rotateX: '180deg', }}
                        whileInView={{ opacity: 1, y: 0, rotateX: '0deg'}}
                        transition={{delay: 1, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={`${classes.experience} ${classes.workingtogether}`}
                    >
                        <h1>Let's work <span className={classes.together}><br></br>together</span>.</h1>
                        <motion.div
                            className={classes.arrowwrap}
                            onClick={()=>window.scrollTo({top: 4150, behavior: 'smooth'})}
                            animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                            transition={{
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <BsFillArrowRightSquareFill />
                        </motion.div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200, rotateX: '180deg', }}
                        whileInView={{ opacity: 1, y: 0, rotateX: '0deg'}}
                        transition={{delay: 1.5, duration: 0.5}}
                        viewport={{ root: scrollRef, once: true }}
                        className={`${classes.experience} ${classes.gotoprojects}`}
                    >
                        <h3>PROJECTS</h3>
                        <a
                            onClick={()=>window.scrollTo({top: 2550, behavior: 'smooth'})}
                            // href={'#'}
                        > Check out my projects.
                        </a>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;