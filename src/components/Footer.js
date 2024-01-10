import React from 'react';
import classes from '../css/Footer.module.css'
import photo from '../imgs/idimg.jpg'
import { FaArrowTurnUp } from 'react-icons/fa6';
import {motion} from "framer-motion";


const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerinner}>
                <div className={classes.footerpersonal}>
                    <img src={photo} />
                    <div className={classes.quote}>
                        <q>
                            My goal is simple.<br/>
                            It is a complete understanding of the universe,<br/>
                            why it is as it is and why it exists at all.
                        </q>
                        {/*<br/>*/}
                        <i> -Stephen Hawking</i>
                    </div>
                </div>
                <div className={classes.footertechs}>
                    <h3>Techs</h3>
                    <a href={'https://react.dev/'} target={'_blank'}>React.js</a>
                    <a href={'https://react-icons.github.io/react-icons/'} target={'_blank'}>React-icons</a>
                    <a href={'https://www.framer.com/motion/'} target={'_blank'}>Framer Motion</a>
                    <a href={'https://www.emailjs.com/'} target={'_blank'}>EmailJS</a>

                </div>
                <motion.div
                    animate={{
                        rotateY: [0, 720],
                        // rotateX: [0, 10, 0, 10, 0],

                    }}
                    transition={{
                        // delay: 2,
                        duration: 2,
                        // ease: "easeInOut",
                        times: [0, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className={classes.footarrow}>
                    <FaArrowTurnUp onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
                    />
                </motion.div>
            </div>

            <div className={classes.cr}>
                <i>© 2023 Jan Kosieradzki. All rights reserved.</i>
            </div>

        </div>
    );
};

export default Footer;