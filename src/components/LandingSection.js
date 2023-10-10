import React, {useEffect} from 'react';
import Header from "../components/Header";
import classes from '../css/LandingSection.module.css'
import { motion } from "framer-motion"
import { BiDownArrow, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

const LandingSection = () => {

    return (
        <div className={classes.landingsection}>
            <Header />
            <div className={classes.landingtile}>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{opacity: 1, y: 0}}
                    transition={{ delay: 0.75, duration: 0.75 }}
                    className={classes.hi}><h1>Hi, my name is John.</h1></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{opacity: 1, y: 0}}
                    transition={{ delay: 1, duration: 0.75 }}
                    className={classes.iam}>
                    <p>
                        I am a Frontend Developer. I like to dabbling in various parts of frontend development
                        and learn new technologies because it's my passion. In my free time i like to improve my Backend skills and play computer games.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{opacity: 1,scale: 1}}
                    transition={{ delay: 1.5, duration: 0.75 }}
                    className={classes.separator}>

                </motion.div>
                <div className={classes.socials}>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ delay: 2, duration: 0.75 }}
                    >
                        <a href={'https://www.linkedin.com/in/jan-kosieradzki-701914259/'} target={"_blank"}>
                            <BiLogoLinkedin />
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ delay: 2.5, duration: 0.75 }}
                    >
                        <a href={'https://github.com/Kafarius'} target={"_blank"}>
                            <BiLogoGithub />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{opacity: 1, y: 0}}
                    transition={{ delay: 3, duration: 0.75 }}
                    className={classes.down}
                    onClick={()=>window.scrollTo({top: 1000, behavior: 'smooth'})}
                >
                    <BiDownArrow />
                </motion.div>
            </div>
        </div>
    );
};

export default LandingSection;